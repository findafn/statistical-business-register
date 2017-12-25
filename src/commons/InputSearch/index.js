import React from 'react';
import { Button, Input } from 'semantic-ui-react';

const InputSearch = () => (
  <Input fluid type='text' placeholder='Masukkan ID SBR' action>
    <input />
    <Button type='submit'>Search</Button>
  </Input>
)

export default InputSearch;