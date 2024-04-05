# github-everyday-work-status


React GitHub Contribution Graph Component
Overview
This React component provides a visual representation similar to the GitHub contribution graph, displaying daily work statuses using colored boxes. Users can pass a dataset containing date and work type information to render the graph.

Installation
You can install this component via npm:


npm install react-github-contribution-graph

Usage

Import the component and use it within your React application:

javascript
Copy code
import React from 'react';
import GitHubContributionGraph from 'react-github-contribution-graph';
import './App.css'; // Include the CSS file if needed

const YourComponent = () => {
  // Sample dataset
  const dataset = [
    { date: 1412225727246, type: 'hard' },
    { date: 1512225727247, type: 'medium' },
    { date: 1612225727248, type: 'less' },
    { date: 1712225727249, type: 'none' },
    { date: 1712125727250, type: 'hard' },
    { date: 1712225727251, type: 'medium' },
    { date: 1312225727252, type: 'less' },
    { date: 1212225727253, type: 'upper-medium' }
  ];

  return (
    <div>
      <GitHubContributionGraph dataset={dataset} />
    </div>
  );
}

export default YourComponent;
Props
dataset (array): An array of objects containing date and work type information. Each object should have the following structure:
date (number): Timestamp representing the date.
type (string): Type of work for the given date. Supported types are 'hard', 'medium', 'less', 'upper-medium', and 'none'.
Example
jsx
Copy code
<GitHubContributionGraph dataset={dataset} />
License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize the README according to your preferences and add more details if needed.