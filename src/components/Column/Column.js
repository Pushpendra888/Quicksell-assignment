import React, { useMemo } from 'react';
import Card from '../Card';
import './column.css';
import { GrAdd } from 'react-icons/gr';
import { LuMoreHorizontal } from 'react-icons/lu';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';

function Column({ tickets, grouping, groupBy, userIdToData }) {
  const title = useMemo(() => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy]?.name;
  }, [grouping, groupBy, userIdToData]);

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy);
    if (grouping === "user") {
      const user = userIdToData[groupBy];
      return user && <UserIcon name={user.name} available={user.available} />;
    }
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className='column'>
      <div className='column-header'>
        <div className='column-header-left-container'>
          {icon}
          <div className='column-title'>
            {title}
            <span className='count'>{tickets.length}</span>
          </div>
        </div>
        <div className='column-header-right-container'>
          <img src={"/icons/add.svg"}/>
          <img src={"/icons/3 dot menu.svg"}/>
          
        </div>
      </div>
      <div className='cards-container'>
        {tickets.map(ticket => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
            groupBy={groupBy}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;