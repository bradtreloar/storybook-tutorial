import React from 'react';

import Task from './Task';

const TaskStory = {
  component: Task,
  title: 'Task',
};

export default TaskStory;

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  onArchiveTask: () => {},
  onPinTask: () => {},
};

export const Pinned = Template.bind({});
Pinned.args = Object.assign({}, Default.args, {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
});

export const Archived = Template.bind({});
Archived.args = Object.assign({}, Default.args, {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
});

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = Object.assign({}, Default.args, {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
});