import React from 'react';
import { Freqtable, OptForm } from '../components';
import freqAskedData from '../utils/freqasked';
import * as GLOBALS from '../GLOBALS';
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

      <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.ButtonLink to="/signup">  Try it now</OptForm.ButtonLink>
        <OptForm.Break />
      </OptForm>
    </Freqtable>
  );
}