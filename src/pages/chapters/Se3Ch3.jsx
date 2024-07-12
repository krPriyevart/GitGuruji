import React from "react";
import { Link } from "react-router-dom";

const Se3Ch3 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 3: Git Bisect</p>
      <hr className="my-4" />

      <p className="text-xl py-4">Introduction to Git Bisect</p>
      <p className="py-4">
        Git bisect is like a binary search for bugs, helping you pinpoint
        exactly where a bug was introduced in your commit history. It automates
        the process of narrowing down the problematic commit, making debugging
        more efficient and systematic.
      </p>

      <p className="text-xl py-4">Why Use Git Bisect?</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Efficient Debugging:</b> Automate the process of finding the commit
          that introduced a bug.
        </li>
        <li className="py-2">
          <b>Systematic Approach:</b> Use binary search principles to minimize
          the number of commits to test.
        </li>
        <li className="py-2">
          <b>Time-Saving:</b> Quickly isolate the problematic commit without
          manual guesswork.
        </li>
      </ul>

      <p className="text-xl py-4">The Commands: Bisecting Bugs 🐛</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Start a Bisect Session:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git bisect start
            <br />
            git bisect bad
          </code>
        </pre>

        <li className="py-2">
          <b>Mark a Good Commit:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git bisect good &lt;commit-hash&gt;</code>
        </pre>

        <li className="py-2">
          <b>Automated Testing:</b>
        </li>
        <p className="py-4">
          Git will automatically check out commits for you to test and mark them
          as good or bad.
        </p>

        <li className="py-2">
          <b>Find the First Bad Commit:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git bisect visualize # Optional: Visualize the bisect process
          </code>
        </pre>

        <li className="py-2">
          <b>Finish the Bisect Session:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git bisect reset</code>
        </pre>
      </ol>

      <p className="text-xl py-4">Practical Example: Using Git Bisect 🌟</p>
      <p className="py-4">
        Imagine you have a bug in your project that started happening a few
        commits ago. Here’s how you can use Git bisect to find the culprit:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Start the Bisect Session:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git bisect start
            <br />
            git bisect bad HEAD # Current commit is bad
          </code>
        </pre>

        <li className="py-2">
          <b>Mark a Good Commit:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git bisect good &lt;good-commit-hash&gt;</code>
        </pre>

        <li className="py-2">
          <b>Automated Testing:</b>
        </li>
        <p className="py-4">
          Git will automatically check out commits for you to test and mark them
          as good or bad.
        </p>

        <li className="py-2">
          <b>Identify the First Bad Commit:</b>
        </li>
        <p className="py-4">
          Continue testing until Git identifies the commit where the bug was
          introduced.
        </p>

        <li className="py-2">
          <b>Finish the Bisect Session:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git bisect reset</code>
        </pre>
      </ol>

      <p className="text-xl py-4">Important Notes</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Binary Search Principle:</b> Git bisect uses a binary search
          algorithm to minimize the number of commits to test.
        </li>
        <li className="py-2">
          <b>Automated Testing:</b> Let Git handle the checkout and testing of
          commits automatically.
        </li>
      </ul>

      <p className="py-4">
        By mastering Git bisect, you can efficiently track down bugs and
        regressions in your codebase, saving time and frustration during
        debugging sessions.
      </p>

      <hr className="my-4" />
      <div className="flex justify-between">
        <Link to="/section/3/chapter/2">Prev</Link>
        <Link to="/section/3/chapter/4">Next</Link>
      </div>
    </div>
  );
};

export default Se3Ch3;
