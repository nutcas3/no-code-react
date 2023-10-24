import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const PersonalInformationOne = React.lazy(
  () => import("pages/PersonalInformationOne"),
);
const PersonalInformationTwo = React.lazy(
  () => import("pages/PersonalInformationTwo"),
);
const PersonalInformation = React.lazy(
  () => import("pages/PersonalInformation"),
);
const TeamsProfileA = React.lazy(() => import("pages/TeamsProfileA"));
const BacklogOne = React.lazy(() => import("pages/BacklogOne"));
const ProfileSectionOptB = React.lazy(() => import("pages/ProfileSectionOptB"));
const BoardsProfileAScrollable = React.lazy(
  () => import("pages/BoardsProfileAScrollable"),
);
const Backlog = React.lazy(() => import("pages/Backlog"));
const X = React.lazy(() => import("pages/X"));
const XOne = React.lazy(() => import("pages/XOne"));
const DashB = React.lazy(() => import("pages/DashB"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const UserprofileActivity = React.lazy(
  () => import("pages/UserprofileActivity"),
);
const UserprofileProjects = React.lazy(
  () => import("pages/UserprofileProjects"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/userprofileprojects"
            element={<UserprofileProjects />}
          />
          <Route
            path="/userprofileactivity"
            element={<UserprofileActivity />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashb" element={<DashB />} />
          <Route path="/xone" element={<XOne />} />
          <Route path="/x" element={<X />} />
          <Route path="/backlog" element={<Backlog />} />
          <Route
            path="/boardsprofileascrollable"
            element={<BoardsProfileAScrollable />}
          />
          <Route path="/profilesectionoptb" element={<ProfileSectionOptB />} />
          <Route path="/backlogone" element={<BacklogOne />} />
          <Route path="/teamsprofilea" element={<TeamsProfileA />} />
          <Route
            path="/personalinformation"
            element={<PersonalInformation />}
          />
          <Route
            path="/personalinformationtwo"
            element={<PersonalInformationTwo />}
          />
          <Route
            path="/personalinformationone"
            element={<PersonalInformationOne />}
          />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
