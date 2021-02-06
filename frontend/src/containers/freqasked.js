import React from 'react';
import { Freqtable, Form } from '../components';
import freqAskedData from '../utils/freqasked';

export function FreqAskedContainer() {
  return (
    <Freqtable>
      <Freqtable.Title>Frequently Asked Questions</Freqtable.Title>
      <Freqtable.Frame>
        {freqAskedData.map((item) => (
          <Freqtable.Item key={item.id}>
            <Freqtable.Header>{item.header}</Freqtable.Header>
            <Freqtable.Body>{item.body}</Freqtable.Body>
          </Freqtable.Item>
        ))}
      </Freqtable.Frame>

      <Form>
        <Form.Text>Ready to watch? Enter your email to create or restart your membership.</Form.Text>
        <Form.Input placeholder="Email address" />
        <Form.Button>Try it now</Form.Button>
        <Form.Break />
      </Form>
    </Freqtable>
  );
}