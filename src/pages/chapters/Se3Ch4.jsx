import React from "react";
import { Link } from "react-router-dom";

const Se3Ch4 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 4: Git Submodules</p>
      <hr className="my-4" />

      <p className="text-xl py-4"> Introduction to Git Submodules</p>
      <p className="py-4">
        Git submodules allow you to include other Git repositories as
        subdirectories within your own repository. They are like embedding one
        project inside another, maintaining separate histories but linked
        together for collaborative development.
      </p>

      <p className="text-xl py-4"> Why Use Git Submodules?</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Code Reusability:</b> Integrate shared libraries or components into
          your project without duplicating code.
        </li>
        <li className="py-2">
          <b>Maintain Separation:</b> Keep dependencies organized and isolated,
          each with its own versioning and history.
        </li>
        <li className="py-2">
          <b>Collaborative Development:</b> Enable teams to work on related
          projects independently yet synchronously.
        </li>
      </ul>

      <p className="text-xl py-4">The Commands: Managing Submodules 📁</p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Adding a Submodule:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git submodule add &lt;repository-url&gt; &lt;path&gt;</code>
        </pre>

        <li className="py-2">
          <b>Initializing Submodules:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git submodule update --init --recursive</code>
        </pre>

        <li className="py-2">
          <b>Updating Submodules:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git submodule update --remote</code>
        </pre>

        <li className="py-2">
          <b>Cloning a Project with Submodules:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git clone --recursive &lt;repository-url&gt;</code>
        </pre>
      </ol>

      <p className="text-xl py-4">
        {" "}
        Practical Example: Using Git Submodules 🌟
      </p>
      <p className="py-4">
        Suppose you have a project that depends on a shared library hosted in
        another repository. Here’s how you can integrate it as a submodule:
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Add the Submodule:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>
            git submodule add https://github.com/example/lib.git libs/libname
          </code>
        </pre>

        <li className="py-2">
          <b>Initialize and Update Submodules:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git submodule update --init --recursive</code>
        </pre>

        <li className="py-2">
          <b>Update Submodules:</b>
        </li>
        <p className="py-4">
          To fetch the latest changes from the submodule repository:
        </p>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git submodule update --remote</code>
        </pre>
      </ol>

      <p className="text-xl py-4">Important Notes</p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Commit Hashes:</b> Submodules link to specific commits in their
          repositories. Update them carefully to avoid unexpected changes.
        </li>
        <li className="py-2">
          <b>Recursive Initialization:</b> Use `--recursive` when cloning or
          updating to include all nested submodules.
        </li>
      </ul>

      <p className="py-4">
        By mastering Git submodules, you can effectively manage dependencies and
        integrate external projects into your own, enhancing code reuse and
        collaboration across teams. Now, let's move further a bit.
      </p>

      <hr className="my-4" />
      <div className="flex justify-between">
        <Link to="/section/3/chapter/3">Prev</Link>
        <Link to="/section/3/chapter/5">Next</Link>
      </div>
    </div>
  );
};

export default Se3Ch4;
