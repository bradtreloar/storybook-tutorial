import React from 'react';
import { render, screen } from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect';

import { WithPinnedTasks } from './TaskList.stories'; //👈  Our story imported here

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const tasks = screen.getAllByDisplayValue(/task/i);
  expect(tasks.length).toEqual(6);
  expect(tasks[0].getAttribute("value")).toContain("pinned");
});
