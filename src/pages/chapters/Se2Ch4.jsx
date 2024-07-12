import React from "react";
import { Link } from "react-router-dom";

const Se2Ch4 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 4: Git Log</p>
      <hr className="my-4" />

      <p className="text-xl py-4">
        {" "}
        Exploring Git Log: Unraveling Your Project's History 📜
      </p>
      <p className="py-4">
        Today we’re diving into the treasure trove of information that is the
        Git log. Imagine you’re an archaeologist uncovering the layers of
        history in an ancient city. The Git log is your detailed record of every
        change, every contributor, and every important event in your project’s
        timeline.
      </p>

      <p className="text-xl py-4"> Why Git Log is Important</p>
      <p className="py-4">
        The Git log is crucial for understanding the evolution of your project.
        It provides a chronological record of all commits, showing what changes
        were made, when, and by whom. This is invaluable for tracking progress,
        debugging issues, and collaborating with others. It's like having a
        magical scroll that tells you everything that has happened in your
        project’s lifetime.
      </p>

      <p className="text-xl py-4">
        {" "}
        Viewing the Git Log: Your Command Spells 🪄
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Basic Git Log:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log</code>
        </pre>
        <p className="py-4">
          This command lists all commits in reverse chronological order, showing
          the commit hash, author, date, and commit message.
        </p>

        <li className="py-2">
          <b>One-line Log:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --oneline</code>
        </pre>
        <p className="py-4">
          This provides a concise view, showing only the commit hash and the
          commit message.
        </p>

        <li className="py-2">
          <b>Customizing the Log Output:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --graph --oneline --decorate</code>
        </pre>

        <li className="py-2">
          <b>Viewing Specific Author’s Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --author="Author Name"</code>
        </pre>

        <li className="py-2">
          <b>Filtering by Commit Message:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --grep="keyword"</code>
        </pre>

        <li className="py-2">
          <b>Limiting the Number of Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log -n &lt;number&gt;</code>
        </pre>

        <li className="py-2">
          <b>Viewing Commits by Date Range:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --since="2023-01-01" --until="2023-12-31"</code>
        </pre>

        <li className="py-2">
          <b>Searching for Changes by File:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log -- &lt;file_path&gt;</code>
        </pre>
      </ol>

      <p className="text-xl py-4"> Sorting and Searching with Git Log</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Sorting by Author:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --author="Author Name" --reverse</code>
        </pre>

        <li className="py-2">
          <b>Searching by Email:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --author=&lt;email&gt;</code>
        </pre>

        <li className="py-2">
          <b>Using Grep to Search Commit Messages:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --grep="keyword"</code>
        </pre>

        <li className="py-2">
          <b>Combining Filters:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --author="Author Name" --grep="keyword"</code>
        </pre>
      </ol>

      <p className="text-xl py-4"> Practical Example: Using Git Log 🌟</p>
      <p className="py-4">
        Imagine you’re investigating a bug that was introduced in the last
        month. Here’s how you can use Git log to find the relevant commits:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>View Recent Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --since="1 month ago"</code>
        </pre>

        <li className="py-2">
          <b>Search by Keyword:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --since="1 month ago" --grep="feature keyword"</code>
        </pre>

        <li className="py-2">
          <b>Filter by Author:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git log --since="1 month ago" --author="Author Name"</code>
        </pre>
      </ol>

      <p className="text-xl py-4"> Why Keeping a Clean Log Matters</p>
      <p className="py-4">
        A clean and well-documented commit history is like a well-organized
        library. It helps you and your team navigate the project’s evolution,
        understand decisions made, and track down issues efficiently. Regularly
        reviewing and maintaining your Git log ensures that your project's
        history remains a valuable resource.
      </p>

      <p className="py-4">
        By mastering Git log, you gain powerful insights into your project’s
        history and evolution. Whether you’re tracking down bugs, reviewing
        progress, or collaborating with others, the Git log is an essential tool
        in your Git toolkit.
      </p>
      <hr className="my-4" />
      <div className="flex justify-between">
        <Link to="/section/2/chapter/3">Prev</Link>
        <Link to="/section/2/chapter/5">Next</Link>
      </div>
    </div>
  );
};

export default Se2Ch4;
