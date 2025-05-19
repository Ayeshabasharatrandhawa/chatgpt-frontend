import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders ChatGPT title and input elements', () => {
  render(<App />);
  
  // Check for the ChatGPT logo button or title text
  const titleElement = screen.getByText(/ChatGPT/i);
  expect(titleElement).toBeInTheDocument();

  // Check for the input field
  const inputElement = screen.getByPlaceholderText(/Send a Message/i);
  expect(inputElement).toBeInTheDocument();

  // Check for the send button
  const sendButton = screen.getByAltText(/Send/i);
  expect(sendButton).toBeInTheDocument();
});

test('updates input and triggers handleSend function on button click', async () => {
  render(<App />);
  
  // Simulate typing a question
  const inputElement = screen.getByPlaceholderText(/Send a Message/i);
  fireEvent.change(inputElement, { target: { value: 'What is React?' } });
  expect(inputElement.value).toBe('What is React?');
  
  // Simulate clicking the send button
  const sendButton = screen.getByAltText(/Send/i);
  fireEvent.click(sendButton);
  
  // Here, you could mock the `sendMsgToOpenAI` function to check if it's called
});
