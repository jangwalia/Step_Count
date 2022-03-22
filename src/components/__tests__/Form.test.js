import React from 'react';
import { render,cleanup } from '@testing-library/react';
import Form from '../Form';
afterEach(cleanup);
describe("Form Component",()=>{
  it("should render without crashing",()=>{
    render(<Form/>);
  })
})