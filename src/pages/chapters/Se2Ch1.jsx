import React from "react";
import { Link } from "react-router-dom";

const Se2Ch1 = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">Chapter 1: Git Branches & Branching</p>
      <hr className="my-4" />

      <p className="text-xl py-4">
        1.1 Branching in Git: Your Path to Parallel Worlds 🌟
      </p>
      <p className="py-4">
        Hello, adventurers! Elated here, welcoming you to the Intermediate
        Section of our journey. We’ve learned the basics, and now it’s time to
        explore a powerful feature in Git: branches. Imagine branches as
        parallel worlds in your project, where you can work on new features, fix
        bugs, or experiment without affecting the main timeline.
      </p>

      <p className="text-xl py-4">1.2 The Magic of Branching: A Story</p>
      <p className="py-4">
        Picture this: You’re a wizard working on a grand spell book. The main
        book is perfect, but you have new ideas and spells to try. Instead of
        scribbling in the main book and risking a magical mishap, you create a
        separate scroll to experiment on. This scroll is your branch. You can
        test, tweak, and perfect your spells here. Once you’re confident, you
        merge the scroll back into the main book.
      </p>
      <p className="py-4">
        In Git, branches work the same way. They allow you to create separate
        lines of development within your project. Let’s dive into the magical
        commands that help you manage branches.
      </p>

      <p className="text-xl py-4">
        1.3 Branching Commands: Your Spells for Parallel Worlds 🪄
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Creating a New Branch:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git branch feature_branch</code>
        </pre>
        <li className="py-2">
          <b>Switching to a Different Branch:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git checkout feature_branch</code>
        </pre>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git checkout -b feature_branch</code>
        </pre>
        <li className="py-2">
          <b>Renaming a Branch:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git branch -m new_branch_name</code>
        </pre>
        <li className="py-2">
          <b>Deleting a Branch:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git branch -d branch_name</code>
        </pre>
        <li className="py-2">
          <b>Pushing a Branch to a Remote Repository:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git push origin feature_branch</code>
        </pre>
      </ol>

      <p className="text-xl py-4">
        1.4 Creating and Managing Branches: An Example 📝
      </p>
      <p className="py-4">
        Let’s say you want to add a new feature to your project. You decide to
        create a file named `features.txt` in a new branch.
      </p>
      <ol className="list-decimal list-inside ml-6">
        <li className="py-2">
          <b>Create and Switch to a New Branch:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git checkout -b feature_addition</code>
        </pre>
        <li className="py-2">
          <b>Create a New File:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>touch features.txt</code>
        </pre>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>echo "List of new features" &gt; features.txt</code>
        </pre>
        <li className="py-2">
          <b>Add and Commit the Changes:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git add features.txt</code>
        </pre>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git commit -m "Added features.txt"</code>
        </pre>
        <li className="py-2">
          <b>Push the Branch to the Remote Repository:</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git push origin feature_addition</code>
        </pre>
        <li className="py-2">
          <b>Merge the Branch (Optional):</b>
        </li>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git checkout main</code>
        </pre>
        <pre className="bg-gray-800 text-white p-2 rounded">
          <code>git merge feature_addition</code>
        </pre>
      </ol>

      <p className="py-4">
        Branches allow you to work on different features or fixes simultaneously
        without interfering with the main project. This flexibility is crucial
        for efficient and organized development. Remember, each branch is a
        parallel world where you can experiment and create magic!
      </p>
      <hr className="my-4" />
      <div className="flex justify-between">
        <Link to="/section/1/chapter/7">Prev</Link>
        <Link to="/section/2/chapter/2">Next</Link>
      </div>
    </div>
  );
};

export default Se2Ch1;
