import React, { useState } from 'react';

const CheckCommand = () => {
  const [command, setCommand] = useState('');
  const [result, setResult] = useState('');

  const validCommands = [
    'git init', 'git clone', 'git config', 'git add', 'git mv', 'git reset', 'git rm', 
  'git bisect', 'git grep', 'git log', 'git show', 'git status', 'git branch', 
  'git checkout', 'git commit', 'git diff', 'git merge', 'git rebase', 'git tag', 
  'git fetch', 'git pull', 'git push', 'git remote', 'git submodule', 'git archive', 
  'git fsck', 'git gc', 'git reflog', 'git stash', 'git cherry-pick', 'git worktree', 
  'git blame', 'git shortlog', 'git describe', 'git clean', 'git notes', 'git ls-tree', 
  'git update-index', 'git symbolic-ref', 'git bundle', 'git cat-file', 'git commit-tree', 
  'git diff-tree', 'git for-each-ref', 'git hash-object', 'git ls-files', 'git merge-base', 
  'git name-rev', 'git pack-objects', 'git show-ref', 'git rev-parse', 'git verify-pack', 
  'git whatchanged'
  ];

  const checkCommand = () => {
    if (validCommands.includes(command.trim())) {
      setResult('Correct Git command!');
    } else {
      setResult('Wrong Git command.');
    }
  };

  return (
    <div className='w-full h-auto bg-slate-600 flex flex-col items-center py-10'>
      <h1 className='text-2xl font-bold mb-4 text-white'>Check Git Command</h1>
      <input
        type='text'
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder='Enter Git command'
        className='w-2/3 p-2 mb-4 border-2 border-gray-300 rounded'
      />
      <button
        onClick={checkCommand}
        className='w-1/4 p-2 mb-4 bg-slate-500 text-white rounded hover:bg-slate-700'
      >
        Check
      </button>
      <textarea
        readOnly
        value={result}
        className='w-2/3 p-2 h-24 border-2 border-gray-300 rounded'
      />
    </div>
  );
};

export default CheckCommand;
