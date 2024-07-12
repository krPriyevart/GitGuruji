import { Link } from "react-router-dom";
import React from "react";

const Intro = () => {
  return (
    <div className="text-white p-8">
      <p className="text-3xl py-4">What You'll Find Here</p>
      <hr className="my-4" />

      <p className="py-4">
        - <b>Blog-Style Content:</b> Our articles are written in a friendly,
        human-like way. We skip the confusing jargon and get straight to the
        point. You'll learn the essential 20% of Git and GitHub that developers
        use 80% of the time.
      </p>
      <p className="py-4">
        - <b>Practice Section:</b> We believe the best way to learn is by doing.
        Our practice section lets you apply what you've learned with hands-on
        exercises. It's like having a playground for your coding skills!
      </p>
      <p className="py-4">
        - <b>Helpful Guides:</b> From creating your first repository to
        understanding branches and merges, our guides cover all the basics and
        beyond. Each guide is crafted to help you build confidence and
        competence in using Git and GitHub.
      </p>

      <p className="text-3xl py-4">Why Choose Us?</p>
      <hr className="my-4" />

      <p className="py-4">
        Our mission is to make learning Git and GitHub easy and accessible for
        everyone. We focus on the most important parts, so you don't have to
        sift through endless pages of documentation. Whether you're a student, a
        hobbyist, or someone looking to start a career in tech, our website is
        here to support you on your journey.
      </p>

      <p className="py-4">
        Come join us and start your adventure in the world of version control
        with Git and GitHub. Happy learning!
      </p>

      <p className="text-3xl py-4">How to Get Started?</p>
      <hr className="my-4" />

      <p className="py-4">
        Hello, adventurers! I'm Elated, your ever-enthusiastic guide on this
        marvelous journey into the world of Git and GitHub. Picture this: you’re
        about to embark on an epic quest, and I’m here to help you navigate
        through the enchanted forests and mystical lands of version control.
        Ready to dive in? Let’s get started!
      </p>

      <p className="text-3xl py-4">The Grand Adventure Awaits</p>
      <hr className="my-4" />

      <p className="py-4">
        Our journey is divided into three exciting sections, each tailored to
        different levels of expertise. Whether you’re a complete newbie or an
        experienced coder looking to refine your skills, we have the perfect
        path for you.
      </p>

      <p className="text-2xl py-4">Section 1: The Newbie Trail 🌱</p>

      <p className="py-4">
        If you’re just starting out and the words "staging" and "committing"
        sound like a foreign language, then this is where your adventure begins.
        The Newbie Trail is designed to guide you through the basics of Git and
        GitHub. We’ll start from scratch and cover:
      </p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Setting Up:</b> How to install Git and create a GitHub account.
        </li>
        <li className="py-2">
          <b>First Steps:</b> Creating your first repository.
        </li>
        <li className="py-2">
          <b>Basic Commands:</b> Learning to stage, commit, and push your
          changes.
        </li>
      </ul>

      <p className="py-4">
        Think of this as learning to walk before you run. By the end of this
        section, you'll have a solid foundation to build upon. So, if you’re new
        to Git and GitHub, this is the perfect place to start.
      </p>

      <p className="text-2xl py-4">Section 2: The Intermediate Path 🌟</p>

      <p className="py-4">
        For those of you who are familiar with the basics and are eager to dive
        deeper, the Intermediate Path is your next destination. Here, we’ll
        tackle more advanced everyday tasks that developers encounter. You’ll
        learn about:
      </p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Branching:</b> Creating and managing branches to keep your work
          organized.
        </li>
        <li className="py-2">
          <b>Merging:</b> Combining different branches and resolving conflicts.
        </li>
        <li className="py-2">
          <b>Rebasing:</b> Streamlining your commit history.
        </li>
      </ul>

      <p className="py-4">
        This section is all about enhancing your skills and making your workflow
        more efficient. If you already know how to stage and commit but want to
        learn about branching and more, the Intermediate Path is for you.
      </p>

      <p className="text-2xl py-4">Section 3: The Advanced Quest 🔮</p>

      <p className="py-4">
        For the brave and seasoned explorers who are ready to master the rare
        and powerful techniques of Git and GitHub, the Advanced Quest awaits.
        Here, we delve into:
      </p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Rebasing:</b> Keeping your commit history clean and meaningful.
        </li>
        <li className="py-2">
          <b>Cherry-Picking:</b> Applying specific commits from one branch to
          another.
        </li>
        <li className="py-2">
          <b>Submodules:</b> Managing projects within projects.
        </li>
      </ul>

      <p className="py-4">
        These advanced concepts are the hidden gems of Git and GitHub, used less
        frequently but incredibly valuable. If you’re looking to become a true
        Git wizard, this is the path you should follow.
      </p>

      <p className="text-2xl py-4">Choosing Your Path</p>

      <p className="py-4">
        Now that you know the lay of the land, it’s time to choose your path.
        Remember, there’s no rush. Take your time to explore and learn at your
        own pace.
      </p>
      <ul className="list-disc list-inside ml-6">
        <li className="py-2">
          <b>Start with the Newbie Trail</b> if you’re just getting your feet
          wet.
        </li>
        <li className="py-2">
          <b>Move on to the Intermediate Path</b> once you’re comfortable with
          the basics and ready to tackle more.
        </li>
        <li className="py-2">
          <b>Embark on the Advanced Quest</b> when you’re prepared to master the
          most powerful techniques.
        </li>
      </ul>

      <p className="py-4">
        No matter where you start, I’ll be here to guide you, cheer you on, and
        celebrate your victories. So, gather your courage, choose your path, and
        let’s embark on this incredible adventure together!
      </p>

      <p className="py-4">
        <b>Note:</b> Each chapter in every section has a practice segment to
        help you test and solidify your knowledge. It is highly recommended to
        follow along with the tutorial by doing it yourself on your system.
        Don't forget to check out the Practice section on our website to
        reinforce what you've learned.
      </p>

      <p className="py-4">Stay elated and keep exploring! 🚀</p>
      <hr className="my-4" />
      <div>
        <Link to="/section/1/chapter/1">Next</Link>
      </div>
    </div>
  );
};

export default Intro;
