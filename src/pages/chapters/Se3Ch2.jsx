import React from "react";

const Se3Ch2 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 2: Git Cherry-Pick</p>
      <hr className="my-4" />

      <p className="text-xl py-4"> Introduction to Git Cherry-Pick</p>
      <p className="py-4">
        Git cherry-pick allows you to pick specific commits from one branch and
        apply them onto another. It's like plucking cherries from one tree
        branch and adding them to another—selectively incorporating changes
        without merging entire branches.
      </p>

      <p className="text-xl py-4"> Why Use Git Cherry-Pick?</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Selective Changes:</b> Apply only specific commits that are
          relevant to your current branch.
        </li>
        <li className="py-2">
          <b>Bug Fixes:</b> Pick commits that fix bugs or add critical features
          without merging the entire branch.
        </li>
        <li className="py-2">
          <b>Maintain Clean History:</b> Keep your commit history focused and
          relevant.
        </li>
      </ul>

      <p className="text-xl py-4"> The Commands: Picking Cherries 🍒</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Cherry-Picking a Commit:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git cherry-pick &lt;commit-hash&gt;</code>
        </pre>

        <li className="py-2">
          <b>Cherry-Picking Multiple Commits:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git cherry-pick &lt;commit-hash1&gt; &lt;commit-hash2&gt;
            &lt;commit-hash3&gt;
          </code>
        </pre>

        <li className="py-2">
          <b>Cherry-Pick with a Range:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git cherry-pick &lt;start-commit&gt;^..&lt;end-commit&gt;</code>
        </pre>

        <li className="py-2">
          <b>Cherry-Pick with Mainline Parent:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git cherry-pick -m &lt;mainline-number&gt; &lt;commit-hash&gt;
          </code>
        </pre>
      </ol>

      <p className="text-xl py-4">
        {" "}
        Practical Example: Using Git Cherry-Pick 🌟
      </p>
      <p className="py-4">
        Let's say you have a hotfix commit on your <code>main</code> branch and
        want to apply it to your <code>development</code> branch:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Identify the Commit:</b>
        </li>
        <p className="py-4">
          Find the hash of the commit you want to cherry-pick from{" "}
          <code>main</code>.
        </p>

        <li className="py-2">
          <b>Cherry-Pick the Commit:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git checkout development
            <br />
            git cherry-pick &lt;commit-hash&gt;
          </code>
        </pre>

        <li className="py-2">
          <b>Resolve Conflicts (if any):</b>
        </li>
        <p className="py-4">
          If there are conflicts, resolve them as you would during a merge.
        </p>

        <li className="py-2">
          <b>Complete the Cherry-Pick:</b>
        </li>
        <p className="py-4">
          Git will apply the changes and create a new commit on{" "}
          <code>development</code>.
        </p>
      </ol>

      <p className="text-xl py-4"> Important Notes</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Commit Order:</b> Cherry-picked commits are applied in the order
          you specify.
        </li>
        <li className="py-2">
          <b>Conflict Resolution:</b> Be prepared to resolve conflicts when
          cherry-picking commits.
        </li>
      </ul>

      <p className="py-4">
        By mastering Git cherry-pick, you gain the ability to selectively apply
        changes from one branch to another, maintaining a clean and efficient
        workflow.
      </p>

      <hr className="my-4" />
      <div className="flex justify-between">
        <a href="/section/3/chapter/1">Prev</a>
        <a href="/section/3/chapter/3">Next</a>
      </div>
    </div>
  );
};

export default Se3Ch2;
