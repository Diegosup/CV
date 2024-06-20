// Define the required variables
const owner = 'Diegosup';  // Replace with the owner of the repository
const repositoryName = 'CV';  // Replace with the name of the repository
const branchName = 'main';  // Replace with the branch name
const githubAccessToken = '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';  // Replace with your GitHub access token

// Construct the API URL
const apiUrl = `https://api.github.com/repos/${owner}/${repositoryName}/commits/${branchName}`;

// Make a GET request with the required headers
fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `token ${githubAccessToken}`
  }
})
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Get the date of the last commit
    const commitDate = new Date(data.commit.author.date);
    
    // Format the date as dd/mm/yy
    const formattedDate = `${('0' + commitDate.getDate()).slice(-2)}/${('0' + (commitDate.getMonth() + 1)).slice(-2)}/${commitDate.getFullYear().toString().slice(-2)}`;
    
    // Display the formatted date in the HTML element
    document.getElementById('commit-date').innerText = formattedDate;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('commit-date').innerText = 'Error fetching date';
  });
