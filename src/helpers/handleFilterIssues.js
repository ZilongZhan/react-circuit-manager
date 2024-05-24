export const handleFilterIssues = (issues, newFilter) => {
  const filterInput = (issue) => {
    return (
      issue.description.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.sender.toUpperCase().includes(newFilter.toUpperCase()) ||
      issue.priority.toUpperCase().includes(newFilter.toUpperCase())
    );
  };

  return issues.filter(filterInput);
};
