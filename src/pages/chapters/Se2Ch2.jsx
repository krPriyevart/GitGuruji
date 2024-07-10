import React from 'react';

const Se2Ch2 = () => {
  return (
    <div className='text-white p-8'>
      <p className='text-3xl py-4'>Chapter 2: Git Stashing</p>
      <hr className='my-4' />

      <p className='text-xl py-4'> The Magic of Git Stashing: Saving Your Work for Later 🎩</p>
      <p className='py-4'>
        Hello again, adventurers! Elated here, ready to guide you through another exciting Git concept: stashing. Imagine you’re working on a spell but suddenly need to switch to another spell book. You don’t want to lose your progress, so you magically stash your notes away, keeping them safe until you need them again. That’s what Git stashing does for your code.
      </p>

      <p className='text-xl py-4'> Why Stashing is Essential</p>
      <p className='py-4'>
        Stashing is like a magical drawer where you can temporarily store your unfinished work. It’s essential because it allows you to save your current changes without committing them, so you can switch branches or work on other tasks without losing your progress. This way, you can return to your stashed changes whenever you’re ready, like picking up your notes exactly where you left off.
      </p>

      <p className='text-xl py-4'> The Commands: Stashing Spells 🪄</p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Stashing Your Changes:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash</code></pre>
        <li className='py-2'><b>Popping Your Stash:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash pop</code></pre>
        <li className='py-2'><b>Clearing Your Stash:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash clear</code></pre>
        <li className='py-2'><b>Stashing Multiple Files:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash push -m "Stash message" file1 file2</code></pre>
        <li className='py-2'><b>Popping Specific Stashes:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash list</code></pre>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash pop stash@&#123;index&#125;</code></pre>
      </ol>

      <p className='text-xl py-4'> Why Stashing is Necessary Before Changing Branches</p>
      <p className='py-4'>
        Imagine you’re in the middle of writing a spell and suddenly need to switch to another spell book. Without stashing, your current spell would be left in an unfinished state, potentially causing conflicts or losing progress. Stashing ensures that your current changes are saved, and your workspace is clean, allowing you to switch branches without worry.
      </p>

      <p className='text-xl py-4'> An Example: Stashing in Action 🌟</p>
      <p className='py-4'>
        Let’s say you’re working on a new feature but need to switch to a different branch to fix a bug. Here’s how you can use stashing:
      </p>
      <ol className='list-decimal list-inside ml-6'>
        <li className='py-2'><b>Stash Your Changes:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash</code></pre>
        <li className='py-2'><b>Switch Branches:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git checkout bug_fix_branch</code></pre>
        <li className='py-2'><b>Apply Your Stash:</b></li>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git checkout feature_branch</code></pre>
        <pre className='bg-gray-800 text-white p-2 rounded'><code>git stash pop</code></pre>
        <li className='py-2'><b>Continue Working:</b></li>
      </ol>

      <p className='py-4'>
        Stashing is an invaluable tool in your Git toolkit, helping you manage your work efficiently and keeping your projects organized. Remember, each stash is like a bookmark, allowing you to return to your work exactly where you left off.
      </p>
      <hr className='my-4' />
    </div>
  );
};

export default Se2Ch2;
