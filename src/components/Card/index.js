import React, {useMemo} from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { getStatusIcon, getPriorityIcon } from '../../utils/helper';

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, groupBy, grouping }) {

  const icon = useMemo(() => {
    
     return getPriorityIcon(groupBy);
    
  }, [ groupBy]);

  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        {grouping === "priority" && <div className='more-icon-container'>
          {icon}
        </div>}
        {ticket.tag.map(t => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
