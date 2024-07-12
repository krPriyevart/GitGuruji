import React from "react";

const Se2Ch3 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 3: Git Rebasing</p>
      <hr className="my-4" />

      <p className="text-xl py-4">
        {" "}
        The Art of Git Rebase: Streamlining Your History ✨
      </p>
      <p className="py-4">
        Hello, adventurers! Elated here, ready to guide you through another
        powerful Git concept: rebasing. Imagine you have multiple magical
        scrolls and want to merge their contents into a single, neat scroll
        without all the messy notes. Git rebase helps you streamline and clean
        up your commit history, making it more readable and organized.
      </p>

      <p className="text-xl py-4"> Why We Need Rebase</p>
      <p className="py-4">
        Rebasing is like tidying up your magical workspace. It allows you to
        move or combine commits from one branch onto another, creating a linear
        and more understandable commit history. This is particularly useful for
        keeping your feature branches clean and avoiding the "merge commit"
        clutter that can make your project's history hard to follow.
      </p>

      <p className="text-xl py-4"> The Commands: Rebase Spells 🪄</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>How to Do Rebase:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git checkout feature_branch
            <br />
            git rebase main
          </code>
        </pre>
        <li className="py-2">
          <b>Squashing Last N Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git rebase -i HEAD~N</code>
        </pre>
        <li className="py-2">
          <b>Using Interactive Rebase to Squash Commits:</b>
        </li>
        <p className="py-4">
          When you run <code>git rebase -i HEAD~N</code>, an editor will open
          listing the last N commits. You can change <code>pick</code> to{" "}
          <code>squash</code> (or <code>s</code>) for the commits you want to
          combine. The commit message editor will then open, allowing you to
          edit the commit message for the squashed commits.
        </p>
        <li className="py-2">
          <b>Renaming the Last Commit:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git commit --amend -m "New commit message"</code>
        </pre>
      </ol>

      <p className="text-xl py-4"> An Example: Rebasing in Action 🌟</p>
      <p className="py-4">
        Let's say you’re working on a feature branch and want to integrate the
        latest changes from the main branch without creating a merge commit.
        Here’s how you can do it:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Create and Switch to a New Branch:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git checkout -b feature_branch</code>
        </pre>
        <p className="py-4">
          Make <b>some commits</b> in <code>feature_branch</code>.
        </p>
        <li className="py-2">
          <b>Rebase the Feature Branch:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git checkout feature_branch
            <br />
            git rebase main
          </code>
        </pre>
        <li className="py-2">
          <b>Resolve Conflicts:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git add .<br />
            git rebase --continue
          </code>
        </pre>
        <li className="py-2">
          <b>Squashing Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git rebase -i HEAD~3</code>
        </pre>
        <p className="py-4">
          In the interactive editor, change <code>pick</code> to{" "}
          <code>squash</code> for the commits you want to combine. Save and
          close the editor.
        </p>
        <li className="py-2">
          <b>Renaming the Last Commit:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git commit --amend -m "Updated commit message"</code>
        </pre>
      </ol>

      <p className="text-xl py-4"> Why Not to Rebase Main Branch</p>
      <p className="py-4">
        Rebasing is a powerful tool, but it comes with a warning: avoid rebasing
        the main branch, especially if it’s shared with others. Rebasing
        rewrites commit history, which can confuse collaborators and lead to
        potential data loss if not handled correctly. Always rebase feature
        branches instead of the main branch to keep your project history clean
        and collaborative-friendly.
      </p>

      <p className="py-4">
        Rebasing is an invaluable technique for maintaining a clean and readable
        commit history. With practice, you'll master the art of rebasing and
        make your projects more manageable and professional.
      </p>

      <p className="py-4">
        Stay elated and keep exploring. Next, we’ll delve into more advanced Git
        commands and workflows. 🚀
      </p>
      <hr className="my-4" />
      <div className="flex justify-between">
        <a href="/section/2/chapter/2">Prev</a>
        <a href="/section/2/chapter/4">Next</a>
      </div>
    </div>
  );
};

export default Se2Ch3;
