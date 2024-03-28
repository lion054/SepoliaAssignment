import React from 'react'

interface SidebarProps {
    tasks: number;
    onDeleteClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    tasks = 0,
    onDeleteClick = () => { },
}) => {
    return (
        <div className='flex flex-col items-center justify-center rounded-2xl shadow-xl'>
            <div className='text-lg font-semibold pt-8'>Total tasks</div>
            <div className='text-md pt-2'>{tasks}</div>
            <div className='cursor-pointer bg-red-700 hover:bg-red-600 text-tertiary1 rounded-xl px-4 py-1 mt-12 mb-4'
                onClick={onDeleteClick}
            >
                Delete All Tasks
            </div>
        </div>
    )
}

export default Sidebar