import { BiRadioCircle, BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return <img src='/icons/No-priority.svg'/>;
    case "Low":
      return <img src='/icons/Img - Low Priority.svg'/>;
    case "Medium":
      return <img src='/icons/Img - Medium Priority.svg'/>;
    case "High":
      return <img src='/icons/Img - High Priority.svg'/>;
    case "Urgent":
      return <img src='/icons/SVG - Urgent Priority colour.svg'/>;
    default:
      return <img src='/icons/SVG - Urgent Priority grey.svg'/>;
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "Backlog":
    case "Todo":
      return <img src='/icons/To-do.svg'/>;
    case "In progress":
      return <img src='/icons/in-progress.svg'/>;
    case "Done":
      return <img src='/icons/Done.svg'/>;
    case "Canceled":
      return <img src='/icons/Cancelled.svg'/>;
    default:
      return <AiFillCloseCircle color='#94a2b3' size={16} />;
  }
};
