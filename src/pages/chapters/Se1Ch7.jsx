import React from 'react';

const Se1Ch7 = () => {
  return (
    <div className='text-white p-8'>
      <p className='text-3xl py-4'>Chapter 7: Workflow & Everyday Git Commands</p>
      <hr className='my-4' />

      <p className='py-4'>
        I'm excited to walk you through the everyday Git commands that form the backbone of any Git workflow. Let’s explore the stages of a file in a Git repository and the essential commands you'll use frequently. Refer Image Below:
      </p>

      <p className='text-xl py-4'>Understanding the Basic Git Workflow 🛠️</p>
      <p className='py-4'>
        I'm excited to walk you through the everyday Git commands that form the backbone of any Git workflow. Let’s explore the stages of a file in a Git repository and the essential commands you'll use frequently. Refer Image Below:
      </p>

      <p className='text-lg py-4'>The Life Cycle of a File: Untracked, Modified, Staged, and Unmodified 📂</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Untracked:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Files that are not yet tracked by Git. They are new and have not been added to the staging area.</li>
          <li className='py-2'>Example: You create a new file named `1.txt`.</li>
        </ul>
        <li className='py-2'><b>Modified:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Files that have been changed but not yet staged for the next commit.</li>
          <li className='py-2'>Example: You edit `1.txt` and add some content, let say you added `Hello, Git World!`.</li>
        </ul>
        <li className='py-2'><b>Staged:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Files that have been marked to be included in the next commit.</li>
          <li className='py-2'>Example: You add `1.txt` to the staging area.</li>
        </ul>
        <li className='py-2'><b>Unmodified:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Files that are committed and have not been modified since.</li>
          <li className='py-2'>Example: After committing `1.txt`, it becomes unmodified.</li>
        </ul>
      </ol>

      <p className='text-xl py-4'>Essential Git Commands for Everyday Use 🔧</p>
      <p className='py-4'>
        NOTE: Try following below examples yourself and see what happen, make sure to create multiple dummy `.txt` files to get a good understanding.
      </p>

      <p className='text-lg py-4'>Checking the Status</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Use `git status` to see the current status of your files:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git status</code></pre>
      </ol>

      <p className='text-lg py-4'>Adding Files</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Use `git add` to add files to the staging area:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git add 1.txt</code></pre>
      </ol>

      <p className='text-lg py-4'>Committing Changes</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Use `git commit` to save your changes to the repository:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git commit -m "Initial commit [Added 1.txt]"</code></pre>
      </ol>

      <p className='text-lg py-4'>Viewing Commit History</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Use `git log` to see the history of your commits:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git log</code></pre>
      </ol>

      <p className='text-lg py-4'>Undoing Changes and Managing Commits 🔄</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Unstaging Files:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use `git reset` to unstage a file:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>git reset 1.txt</code></pre>
        </ul>
        <li className='py-2'><b>Resetting to a Previous Commit:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use `git reset --hard` to reset your repository to a previous commit:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>git reset --hard <commit-hash /></code></pre>
        </ul>
        <li className='py-2'><b>Reverting to a Commit:</b></li>
        <ul className='list-disc list-inside ml-6'>
          <li className='py-2'>Use `git revert` to create a new commit that undoes changes from a previous commit:</li>
          <pre className='bg-gray-800 text-white p-2 rounded'><code>git revert <commit-hash /></code></pre>
        </ul>
      </ol>

      <p className='text-xl py-4'>Working with Remote Repositories 🌐</p>
      <p className='py-4'>Below are the steps to work with remote repositories:</p>
      <p className='text-lg py-4'>Forking a Repository</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'>On GitHub, fork a repository to create a personal copy of it.</li>
      </ol>

      <p className='text-lg py-4'>Pushing Changes</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Use `git push` to upload your local commits to the remote repository:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git push origin main</code></pre>
      </ol>

      <p className='text-lg py-4'>Cloning a Repository</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Use `git clone` to create a local copy of a remote repository:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git clone https://github.com/elatedbadge/Learning_Git.git</code></pre>
      </ol>

      <p className='text-lg py-4'>Pulling Changes</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Use `git pull` to fetch and merge changes from the remote repository:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git pull origin main</code></pre>
      </ol>

      <p className='text-lg py-4'>Example Workflow: Putting It All Together 🌟</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Create and Edit a File:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>touch 1.txt</code></pre>
        <li className='py-2'><b>Check the Status:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git status</code></pre>
        <li className='py-2'><b>Add the File:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git add 1.txt</code></pre>
        <li className='py-2'><b>Commit the File:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git commit -m "Initial commit [Added 1.txt]"</code></pre>
        <li className='py-2'><b>Check the Commit History:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git log</code></pre>
        <li className='py-2'><b>Make Further Edits:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code># Edit 1.txt file make some changes like adding some new lines, and then save it and run below commands:</code></pre>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git add 1.txt</code></pre>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git commit -m "Update [Modified 1.txt]"</code></pre>
        <li className='py-2'><b>Push to Remote Repository:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git remote add origin https://github.com/elatedbadge/Learning_Git.git</code></pre>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git push -u origin main</code></pre>
        <li className='py-2'><b>Verify on GitHub:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>Go to your GitHub repository and refresh the page to check the updates.</code></pre>
      </ol>

      <p className='py-4'>Note: Use `Ctrl + L` or the `clear` command to clear your terminal window.</p>

      <p className='py-4'>
        Now, you're equipped with the essential Git commands and workflow knowledge. Practice these commands regularly to become proficient.
      </p>
      <hr className='my-4' />

      <p className='text-xl py-4'>🎉🎉🎉 Congratulations on Completing Section 1 🎉🎉🎉</p>
      <p className='py-4'>
        I’m absolutely thrilled to congratulate you on reaching this milestone. You’ve successfully completed Section 1 of our Git and GitHub journey, mastering the basics and setting a strong foundation for what's to come.
      </p>
      <p className='py-4'>
        Think of this as the first chapter of a grand story, where you’ve learned how to create and configure repositories, manage files, and perform essential Git commands. You’ve bravely navigated through setting up Git, creating your first repository, and even pushing your first file to GitHub.
      </p>
      <p className='py-4'>
        As you move forward to the next sections, remember that each step you take brings you closer to becoming a Git wizard. Keep practicing, stay curious, and don’t hesitate to revisit these basics whenever you need a refresher. Your persistence and dedication have brought you this far, and I’m confident that you’ll continue to achieve great things.
      </p>
      <p className='py-4'>
        Stay elated, keep exploring, and get ready for the exciting adventures that await in the Intermediate Section! 🚀
      </p>
    </div>
  );
};

export default Se1Ch7;
