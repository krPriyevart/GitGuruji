import React from 'react';

const Se3Ch6 = () => {
  return (
    <div className='text-white p-8'>
      <hr className='my-4' />
      <p className='text-3xl py-4'>Chapter 6: Git Reflog</p>
      <hr className='my-4' />

      <p className='text-xl py-4'> Introduction to Git Reflog</p>
      <p className='py-4'>
        Git reflog (reference log) records the history of Git operations at the repository level. It's like a diary of your repository's changes, including commits, merges, reverts, and resets, even if they are no longer part of the active history.
      </p>

      <p className='text-xl py-4'>Why Use Git Reflog?</p>
      <ul className='list-disc list-inside ml-6'>
        <li className='py-2'><b>Undo Mistakes:</b> Recover lost commits or changes that were accidentally reset or deleted.</li>
        <li className='py-2'><b>Track History:</b> View a detailed timeline of repository actions, even those not visible in branch history.</li>
        <li className='py-2'><b>Troubleshooting:</b> Debug issues by tracing the sequence of operations leading to a problem.</li>
      </ul>

      <p className='text-xl py-4'>The Commands: Navigating Git Reflog 📜</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Viewing the Reflog:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git reflog</code></pre>

        <li className='py-2'><b>Restoring Lost Commits:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git checkout &lt;commit-hash&gt;</code></pre>

        <li className='py-2'><b>Recovering Lost Changes:</b></li>
        <p className='py-2'>Cherry-pick or merge lost commits back into the active branch.</p>

        <li className='py-2'><b>Cleaning Up Reflog:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git reflog expire --expire=30.days --all
git gc --prune=now</code></pre>
      </ol>

      <p className='text-xl py-4'> Practical Example: Using Git Reflog 🌟</p>
      <p className='py-4'>
        Suppose you accidentally reset to a previous commit and need to recover lost changes. Here’s how you can use Git reflog:
      </p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>View the Reflog:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git reflog</code></pre>

        <li className='py-2'><b>Identify Lost Commit:</b></li>
        <p className='py-2'>Find the commit hash where you want to return (e.g., <code>HEAD@{1}</code>).</p>

        <li className='py-2'><b>Restore Lost Changes:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git checkout HEAD@{1}</code></pre>

        <li className='py-2'><b>Recover and Continue:</b></li>
        <p className='py-2'>Cherry-pick or merge the recovered changes back into your active branch.</p>
      </ol>

      <p className='text-xl py-4'> Important Notes</p>
      <ul className='list-disc list-inside ml-6'>
        <li className='py-2'><b>Repository-Level History:</b> Reflog records operations across the entire repository.</li>
        <li className='py-2'><b>Maintenance:</b> Periodically clean up reflog entries to avoid unnecessary clutter.</li>
      </ul>

      <p className='py-4'>
        By mastering Git reflog, you can efficiently track down and recover lost commits, debug issues, and maintain a detailed history of your repository's operations.
      </p>

      <hr className='my-4' />
    </div>
  );
};

export default Se3Ch6;
