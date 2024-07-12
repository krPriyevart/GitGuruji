import React from "react";

const Se2Ch5 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 5: Git Diff</p>
      <hr className="my-4" />

      <p className="text-xl py-4">Unveiling Changes with Git Diff 🔍</p>
      <p className="py-4">
        Hello, adventurers! Elated here, ready to guide you through another
        powerful Git tool: Git diff. Imagine you’re a detective analyzing clues
        to understand what has changed in your code. Git diff is your magnifying
        glass, showing you exactly what has been added, removed, or modified
        between commits, branches, or even specific files.
      </p>

      <p className="text-xl py-4">Why Git Diff is Important</p>
      <p className="py-4">
        Git diff is crucial for reviewing changes, debugging issues, and
        understanding the impact of your modifications. It provides a detailed
        comparison of differences, helping you ensure that your changes are
        correct and intentional before committing them. This tool is essential
        for maintaining code quality and catching errors early.
      </p>

      <p className="text-xl py-4">The Commands: Diff Spells 🪄</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Viewing Changes in the Working Directory:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff</code>
        </pre>

        <li className="py-2">
          <b>Comparing Staged Changes:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff --staged</code>
        </pre>

        <li className="py-2">
          <b>Comparing Changes Between Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff &lt;commit1&gt; &lt;commit2&gt;</code>
        </pre>

        <li className="py-2">
          <b>Comparing Changes Between Branches:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff &lt;branch1&gt; &lt;branch2&gt;</code>
        </pre>

        <li className="py-2">
          <b>Comparing Changes in a Specific File:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff &lt;file&gt;</code>
        </pre>

        <li className="py-2">
          <b>Generating a Patch File:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff &gt; changes.patch</code>
        </pre>
      </ol>

      <p className="text-xl py-4"> An Example: Using Git Diff 🌟</p>
      <p className="py-4">
        Let's say you’ve been working on a new feature and want to review your
        changes before committing them. Here’s how you can use Git diff:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>View Changes in the Working Directory:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff</code>
        </pre>

        <li className="py-2">
          <b>Stage Some Changes:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git add &lt;file&gt;</code>
        </pre>

        <li className="py-2">
          <b>View Staged Changes:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff --staged</code>
        </pre>

        <li className="py-2">
          <b>Compare Changes Between Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff HEAD~1 HEAD</code>
        </pre>

        <li className="py-2">
          <b>Compare Changes in a Specific File:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git diff &lt;file&gt;</code>
        </pre>
      </ol>

      <p className="text-xl py-4"> Practical Uses of Git Diff</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Code Reviews:</b>
        </li>
        <p className="py-4">
          Use Git diff to review changes before committing or merging. This
          helps ensure that the changes are correct and align with the project's
          goals.
        </p>

        <li className="py-2">
          <b>Debugging:</b>
        </li>
        <p className="py-4">
          When tracking down a bug, Git diff can show what has changed since the
          last known good state, helping you identify the source of the issue.
        </p>

        <li className="py-2">
          <b>Collaborating:</b>
        </li>
        <p className="py-4">
          Use Git diff to review contributions from team members before merging
          their changes into the main branch. This ensures code quality and
          consistency.
        </p>
      </ol>

      <p className="text-xl py-4">Enhancing Your Workflow with Git Diff</p>
      <p className="py-4">
        Using Git diff regularly helps you maintain high code quality and avoid
        mistakes. It's like having a detailed record of all changes, making it
        easier to understand and manage your project's evolution.
      </p>
      <p className="py-4">
        By mastering Git diff, you gain powerful insights into your project's
        changes and can ensure that every modification is intentional and
        beneficial. Whether you’re reviewing code, debugging, or collaborating,
        Git diff is an essential tool in your Git toolkit.
      </p>

      <hr className="my-4" />
      <p className="text-3xl py-4">
        🎉🎉🎉 Congratulations on Completing Section 2 🎉🎉🎉
      </p>
      <p className="py-4">
        Hey there, adventurous learners! Elated here, and I couldn't be prouder
        of you for reaching this milestone. You've successfully navigated
        through the twists and turns of the Intermediate Section, mastering some
        of the most powerful and essential Git commands along the way. Actually
        this is more than sufficient for Git & GitHub. But if you want to level
        up further let's go for the next section!
      </p>
      <p className="py-4">
        As you move forward to the next sections, remember that each step you
        take brings you closer to becoming a Git wizard. Keep practicing, stay
        curious, and don’t hesitate to revisit these basics whenever you need a
        refresher. Your persistence and dedication have brought you this far,
        and I’m confident that you’ll continue to achieve great things.
      </p>
      <p className="py-4">
        Stay elated, keep exploring, and get ready for the exciting adventures
        that await in the Advanced Section! 🚀
      </p>

      <hr className="my-4" />
      <div className="flex justify-between">
        <a href="/section/2/chapter/4">Prev</a>
        <a href="/section/3/chapter/1">Next</a>
      </div>
    </div>
  );
};

export default Se2Ch5;
