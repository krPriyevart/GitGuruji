import React from "react";
import { Link } from "react-router-dom";

const Se3Ch1 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 1: Interactive Rebase</p>
      <hr className="my-4" />

      <p className="py-4">
        Welcome, intrepid learners, to the Advanced Section! Here, we dive
        deeper into Git’s powerful features, equipping you with advanced skills
        to handle complex scenarios and streamline your workflows. Let's start
        by organizing our topics into chapters, each dedicated to a crucial
        advanced Git feature.
      </p>

      <p className="text-xl py-4">Introduction to Interactive Rebase</p>
      <p className="py-4">
        Interactive rebase is like being a time traveler, allowing you to
        rewrite the history of your project. It's an advanced tool for modifying
        commit history, enabling you to squash, reorder, or edit commits before
        pushing them to the remote repository. This helps keep your commit
        history clean and meaningful.
      </p>

      <p className="text-xl py-4">Why Use Interactive Rebase?</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Clean Commit History:</b> Merge multiple commits into one to keep
          history concise.
        </li>
        <li className="py-2">
          <b>Edit Commit Messages:</b> Correct mistakes or add more descriptive
          messages.
        </li>
        <li className="py-2">
          <b>Reorder Commits:</b> Ensure commits are in logical order.
        </li>
        <li className="py-2">
          <b>Remove Commits:</b> Drop unnecessary or unwanted commits.
        </li>
      </ul>

      <p className="text-xl py-4">The Commands: Interactive Rebase Spells 🪄</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Starting Interactive Rebase:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git rebase -i HEAD~n</code>
        </pre>

        <li className="py-2">
          <b>Rebasing Interactively:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            pick a1b2c3d Commit message 1<br />
            pick e4f5g6h Commit message 2
          </code>
        </pre>
        <ul className="list-disc list-inside ml-6">
          <li className="py-2">
            <code>pick</code>: Use commit as is.
          </li>
          <li className="py-2">
            <code>reword</code>: Edit commit message.
          </li>
          <li className="py-2">
            <code>edit</code>: Edit commit.
          </li>
          <li className="py-2">
            <code>squash</code>: Combine with the previous commit.
          </li>
          <li className="py-2">
            <code>fixup</code>: Like squash, but discard this commit’s message.
          </li>
          <li className="py-2">
            <code>drop</code>: Remove commit.
          </li>
        </ul>

        <li className="py-2">
          <b>Example: Squashing Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            pick a1b2c3d Commit message 1<br />
            squash e4f5g6h Commit message 2
          </code>
        </pre>

        <li className="py-2">
          <b>Reordering Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            pick e4f5g6h Commit message 2<br />
            pick a1b2c3d Commit message 1
          </code>
        </pre>

        <li className="py-2">
          <b>Editing a Commit Message:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            reword a1b2c3d Commit message 1<br />
            pick e4f5g6h Commit message 2
          </code>
        </pre>

        <li className="py-2">
          <b>Aborting a Rebase:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git rebase --abort</code>
        </pre>
      </ol>

      <p className="text-xl py-4">
        Practical Example: Using Interactive Rebase 🌟
      </p>
      <p className="py-4">
        Imagine you have three commits, and you want to squash the second and
        third into the first, and also edit the commit message of the first:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Start Interactive Rebase:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git rebase -i HEAD~3</code>
        </pre>

        <li className="py-2">
          <b>Modify the List in Editor:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            pick a1b2c3d Initial commit message
            <br />
            squash e4f5g6h Second commit message
            <br />
            squash i7j8k9l Third commit message
          </code>
        </pre>

        <li className="py-2">
          <b>Edit Commit Message:</b>
        </li>
        <p className="py-4">
          Save and close the editor. Git will prompt you to combine commit
          messages. Edit as needed.
        </p>

        <li className="py-2">
          <b>Finish Rebase:</b>
        </li>
        <p className="py-4">
          Save the combined commit message. Git will complete the rebase.
        </p>
      </ol>

      <p className="text-xl py-4">Important Notes</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Avoid Rebasing Public Branches:</b> Rebasing rewrites history,
          which can confuse collaborators if the branch is shared.
        </li>
        <li className="py-2">
          <b>Practice Makes Perfect:</b> Experiment in a test repository to
          become comfortable with interactive rebase.
        </li>
      </ul>

      <p className="py-4">
        By mastering interactive rebase, you gain fine control over your
        project's commit history, making it clean and logical. Whether you’re
        preparing a feature branch for merging or tidying up your commits before
        sharing with the team, interactive rebase is an invaluable tool.
      </p>

      <hr className="my-4" />
      <div className="flex justify-between">
        <Link to="/section/2/chapter/5">Prev</Link>
        <Link to="/section/3/chapter/2">Next</Link>
      </div>
    </div>
  );
};

export default Se3Ch1;
