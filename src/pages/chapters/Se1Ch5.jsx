import React from 'react';

const Se1Ch5 = () => {
  return (
    <div className='text-white p-8'>
      <p className='text-3xl py-4'>Chapter 5: Configuring Git</p>
      <hr className='my-4' />

      <p className='py-4'>
        I'm ready to guide you through another essential step in our journey. Now that we've downloaded and installed Git, it's time to configure it and set up our identity. This will ensure that all our magical contributions are correctly attributed to us. Let's go!
      </p>

      <p className='text-xl py-4'>Initializing Git in Your Project Directory ⚙️</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Open Your Terminal:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>On Windows, you can use Git Bash.</li>
          <li className='py-2'>On Linux, open your terminal.</li>
        </ul>
        <li className='py-2'><b>Navigate to Your Project Directory:</b> Use the `cd` command to navigate to the directory where you want to initialize Git. For example:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>cd path/to/your/project</code></pre>
        <li className='py-2'><b>Initialize Git:</b> Run the following command to initialize a new Git repository in your project directory:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git init</code></pre>
      </ol>

      <p className='text-xl py-4'>Configuring Git with Your Information 📝</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Set Your Username:</b> Run the following command to configure your username:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git config --global user.name "ElatedBadge"</code></pre>
        <li className='py-2'><b>Set Your Email Address:</b> Run the following command to configure your email address:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git config --global user.email "elatedbadge8053@gmail.com"</code></pre>
      </ol>

      <p className='text-xl py-4'>Locating the .gitconfig File 📁</p>
      <p className='py-4'>The `.gitconfig` file is where Git stores your configuration settings. Here's where you can find it:</p>
      <ul className='list-disc list-inside ml-6'>
        <li className='py-2'><b>On Linux:</b> It’s located in your home directory.</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>~/.gitconfig</code></pre>
        <li className='py-2'><b>On Windows:</b> It’s located in your user directory.</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>C:/Users/YourUsername/.gitconfig</code></pre>
      </ul>

      <p className='text-xl py-4'>Storing Your Credentials Securely 🔒</p>
      <p className='py-4'>To avoid entering your credentials every time you interact with your remote repository, you can store them securely:</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Enable Credential Helper:</b> Run the following command to store your credentials:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git config --global credential.helper store</code></pre>
      </ol>

      <p className='text-xl py-4'>Creating a Personal Access Token (PAT) 🔑</p>
      <p className='py-4'>To securely push code to GitHub, you'll need a Personal Access Token (PAT). Here’s how to create one:</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Generate a PAT on GitHub:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Go to your GitHub account settings.</li>
          <li className='py-2'>Navigate to <b>Developer settings</b>  <b>Personal access tokens</b>.</li>
          <li className='py-2'>Click <b>Generate new token</b>.</li>
          <li className='py-2'>Select the scopes (permissions) for your token.</li>
          <li className='py-2'>Generate the token and copy it. Make sure to store it securely as you won't be able to see it again.</li>
        </ul>
        <li className='py-2'><b>Using Your PAT:</b> When you push code to GitHub, Git will prompt you to enter your credentials. Use your PAT as the password.</li>
      </ol>

      <p className='text-xl py-4'>Creating and Pushing Your First File 📂</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Create a README File:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Create a new file named `README.txt` by running:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>touch README.txt</code></pre>
          <li className='py-2'>Open the file using any text editor or VS Code and write "Hello World!" inside it.</li>
          <li className='py-2'>Save and close the file.</li>
        </ul>
        <li className='py-2'><b>Add the File to Git:</b> Add the file to your staging area:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git add README.txt</code></pre>
        <li className='py-2'><b>Commit the File:</b> Commit the file to your repository:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git commit -m "Initial commit [Added README]"</code></pre>
        <li className='py-2'><b>Add Remote Repository:</b> Check the remote repository URLs:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git remote -v</code></pre>
        <li className='py-2'>Add your GitHub repository as a remote (Just change the URL & everything must remain same):</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git remote add origin https://github.com/elatedbadge/Learning_Git.git</code></pre>
        <li className='py-2'><b>Push the File to GitHub:</b> Push the file to your remote repository:</li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git push -u origin main</code></pre>
        <p className='py-2'><b>Note:</b> If the push fails, run the command again. Git will prompt you to enter your credentials. Use your PAT when prompted for a password. On Linux, the process is the same. But if you are having trouble with git credential store try googling the issue and asking ChatGPT.</p>
        <li className='py-2'><b>Verify on GitHub:</b> Go to your GitHub repository and refresh the page to check that `README.txt` has been successfully pushed.</li>
        <p className='py-2'><b>Note:</b> Use `Ctrl + L` or the `clear` command to clear your terminal window.</p>
      </ol>

      <p className='text-xl py-4'>Good Practices for Committing 🧹</p>
      <p className='py-4'>
        While committing your changes, keep these good practices in mind:
      </p>
      <ul className='list-disc list-inside ml-6'>
        <li className='py-2'><b>Meaningful Messages:</b> Write clear and concise commit messages that describe what changes you've made.</li>
        <li className='py-2'><b>Atomic Commits:</b> Make each commit a single, logical change.</li>
        <li className='py-2'><b>Review Before Commit:</b> Review your changes before committing to ensure accuracy.</li>
      </ul>
      <p className='py-4'>Don’t worry, we will explain each concept in detail later. For now, just follow these steps to make sure everything is working correctly.</p>
      <p className='py-4'>
        Now, your Git configuration is complete, and you’ve successfully pushed your first file to GitHub! You’re well on your way to mastering Git and GitHub. In the next chapter, we’ll dive deeper into Git commands and explore more advanced features. Stay elated and keep exploring! 🚀
      </p>
      <hr className='my-4' />
    </div>
  );
};

export default Se1Ch5;
