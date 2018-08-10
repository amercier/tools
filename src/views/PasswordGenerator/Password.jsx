import React from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import { string, func } from '../../lib/prop-types';

import './Password.scss';

const Password = ({ password, updatePassword }) => (
  <div className="password-generator-password">
    <pre className="password-generator-password__password">
      {password}
    </pre>
    <Button raised onClick={updatePassword}>
      <ButtonIcon use="refresh" />
    </Button>
    <div />
  </div>
);

Password.propTypes = {
  password: string.isRequired,
  updatePassword: func.isRequired,
};

export default Password;
