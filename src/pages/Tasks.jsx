import React from 'react'
import { tasks } from '../data/tasks'
import '../styles/pages.css'

function Tasks() {
  const openTasks = tasks.filter(t => t.status === 'Open')
  const inProgressTasks = tasks.filter(t => t.status === 'In Progress')
  const doneTasks = tasks.filter(t => t.status === 'Done')

  const TaskCard = ({ task }) => (
    <div className="task-card">
      <h3>{task.title}</h3>
      <span className={`difficulty-badge difficulty-${task.difficulty.toLowerCase()}`}>
        {task.difficulty}
      </span>
      <p className="task-description">{task.description}</p>
    </div>
  )

  return (
    <div className="page tasks-page">
      <h1>Available Tasks</h1>
      <p className="page-intro">
        Join our research efforts! Browse available tasks and contribute to ongoing projects.
      </p>

      <div className="tasks-board">
        <div className="task-column">
          <h2 className="column-header open">Open ({openTasks.length})</h2>
          <div className="task-list">
            {openTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className="task-column">
          <h2 className="column-header in-progress">In Progress ({inProgressTasks.length})</h2>
          <div className="task-list">
            {inProgressTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className="task-column">
          <h2 className="column-header done">Done ({doneTasks.length})</h2>
          <div className="task-list">
            {doneTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
