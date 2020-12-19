import React from 'react';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="Settings">
      This is the settings page.{' '}
      <Link to="/">Return to your list of notes.</Link>
    </div>
  );
}
