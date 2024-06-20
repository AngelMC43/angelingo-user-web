import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import HomeView from "../Home/HomeView";
import LoginView from "../login/LoginView";
import SignUpView from "../signUp/SignupView";
import GuideView from "../guide/GuideView";
import RankingView from "../ranking/RankingView";
import ContactView from "../contact/ContactView";
import AboutView from "../about/AboutView";
import SiteMapView from "../siteMap/SiteMap";
import IndexMenuView from "../indexMenu/IndexMenuView";
import ProfileView from "../profile/ProfileView";
import GamesView from "../gamesView/GamesView";
import BasicView from "../basicView/BasicView";
import IntroBasicVocabulary from "../intros/basic/IntroBasicVocabulary";
import IntroBasicGrammar from "../intros/basic/IntroBasicGrammar";
import IntroBasicChoose from "../intros/basic/IntroBasicChoose";
import IntroBasicMatch from "../intros/basic/IntroBasicMatch";
import BasicVocabulary from "../basicGames/BasicVocabulary";
import BasicGrammar from "../basicGames/BasicGrammar";
import BasicMatch from "../basicGames/BasicMatch";
import BasicChoose from "../basicGames/BasicChoose";
import NextIntermediate from "../intros/intermediate/NextIntermediate";
import IntermediateView from "../intermediateView/IntermediateView";
import IntroIntermediateVocabulary from "../intros/intermediate/IntroIntermediateVocabulary";
import IntroIntermediateGrammar from "../intros/intermediate/IntroIntermediateGrammar";
import IntroIntermediateVerbs from "../intros/intermediate/IntroIntermediateVerbs";
import IntroIntermediateMatch from "../intros/intermediate/IntroIntermediateMatch";
import IntermediateVocabulary from "../intermediateGames/IntermediateVocabulary";
import IntermediateGrammar from "../intermediateGames/IntermediateGrammar";
import IntermediateVerbs from "../intermediateGames/IntermediateVerbs";
import IntermediateMatch from "../intermediateGames/IntermediateMatch";
import NextAdvanced from "../intros/advanced/NextAdvanced";
import AdvancedView from "../advancedView/AdvancedView";
import AdvancedGrammar from "./AdvancedGrammar";
import AdvancedVocabulary from "./AdvancedVocabulary";
import AdvancedVerbs from "./AdvancedVerbs";
import AdvancedMatch from "./AdvancedMatch";
import IntroAdvancedGrammar from "../intros/advanced/IntroAdvancedGrammar";
import IntroAdvancedMatch from "../intros/advanced/IntroAdvancedMatch";
import IntroAdvancedVerbs from "../intros/advanced/IntroAdvancedVerbs";
import IntroAdvancedVocabulary from "../intros/advanced/IntroAdvancedVocabulary";
import NextCompleted from "../intros/advanced/NextCompleted";

// import RequireAuth from "../components/Login/RequireAuth.js";
// import Main from "../views/Home/Home.js";
// import SignUpView from "../views/SignUpView.js";
// import LoginView from "../views/LoginView.js";
// import IndexMenu from "../views/indexMenu/IndexMenu.js";
// import ProfileView from "../views/ProfileView.js";
// import Games from "../views/GamesLink/Games.js";
// import BasicPanel from "../views/GamesView/BasicPanel.js";
// import IntermediatePanel from "../views/GamesView/IntermediatePanel.js";
// import AdvancedPanel from "../views/GamesView/AdvancedPanel.js";
// import BasicView from "../views/GamesView/BasicView.js";
// import IntermediateView from "../views/GamesView/IntermediateView.js";
// import AdvancedView from "../views/GamesView/AdvancedView.js";
// import About from "../views/About/About.js";
// import Guide from "../views/Guide/Guide.js";
// import UploadUser from "../components/UploadUser/UploadUser.js";
// import Contacto from "../views/Contacto/Contacto.js";
// import MapaIdeas from "../views/MapaIdeas/MapaIdeas.js";
// import MyScore from "../components/Punctuation/MyScore.js";

// import BasicVocabulary from "../components/Games/Basic/BasicVocabulary.js";
// import BasicGrammar from "../components/Games/Basic/BasicGrammar.js";
// import BasicMatch from "../components/Games/Basic/BasicMatch.js";
// import BasicChoose from "../components/Games/Basic/BasicChoose.js";
// import IntroBasicVocabulary from "../components/Games/Basic/IntroBasicVocabulary.js";
// import IntroBasicGrammar from "../components/Games/Basic/IntroBasicGrammar.js";
// import IntroBasicChoose from "../components/Games/Basic/IntroBasicChoose.js";
// import IntroBasicMatch from "../components/Games/Basic/IntroBasicMatch.js";

// import NextIntermediate from "../components/Games/Intermediate/NextIntermediate.js";
// import IntermediateVocabulary from "../components/Games/Intermediate/IntermediateVocabulary.js";
// import IntermediateGrammar from "../components/Games/Intermediate/IntermediateGrammar.js";
// import IntermediateVerbs from "../components/Games/Intermediate/IntermediateVerbs.js";
// import IntermediateMatch from "../components/Games/Intermediate/IntermediateMatch.js";
// import IntroIntermediateVocabulary from "../components/Games/Intermediate/IntroIntermediateVocabulary.js";
// import IntroIntermediateGrammar from "../components/Games/Intermediate/IntroIntermediateGrammar.js";
// import IntroIntermediateVerbs from "../components/Games/Intermediate/IntroIntermediateVerbs.js";
// import IntroIntermediateMatch from "../components/Games/Intermediate/IntroIntermediateMatch.js";

// import ScoreIntVocabulary from "../components/Punctuation/ScoreIntVocabulary.js";
// import ScoreIntVerbs from "../components/Punctuation/ScoreIntVerbs.js";
// import ScoreIntGrammar from "../components/Punctuation/ScoreIntGrammar.js";
// import ScoreIntMatch from "../components/Punctuation/ScoreIntMatch.js";

// import NextAdvanced from "../components/Games/Advanced/NextAdvanced.js";
// import AdvancedVocabulary from "../components/Games/Advanced/AdvancedVocabulary.js";
// import AdvancedGrammar from "../components/Games/Advanced/AdvancedGrammar.js";
// import AdvancedVerbs from "../components/Games/Advanced/AdvancedVerbs.js";
// import AdvancedMatch from "../components/Games/Advanced/AdvancedMatch.js";
// import IntroAdvancedVocabulary from "../components/Games/Advanced/IntroAdvancedVocabulary.js";
// import IntroAdvancedGrammar from "../components/Games/Advanced/IntroAdvancedGrammar.js";
// import IntroAdvancedVerbs from "../components/Games/Advanced/IntroAdvancedVerbs.js";
// import IntroAdvancedMatch from "../components/Games/Advanced/IntroAdvancedMatch.js";
// import NextCompleted from "../components/Games/Advanced/NextCompleted.js";

// import ScoreAdvVocabulary from "../components/Punctuation/ScoreAdvVocabulary.js";
// import ScoreAdvVerbs from "../components/Punctuation/ScoreAdvVerbs.js";
// import ScoreAdvGrammar from "../components/Punctuation/ScoreAdvGrammar.js";
// import ScoreAdvMatch from "../components/Punctuation/ScoreAdvMatch.js";

// import Ranking from "../components/Ranking/Ranking.js";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/*public routes */}
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="signup" element={<SignUpView />} />
        <Route path="guide" element={<GuideView />} />
        <Route path="ideas-map" element={<SiteMapView />} />
        <Route path="contacto" element={<ContactView />} />
        <Route path="about" element={<AboutView />} />

        {/*protected routes */}
        <Route path="ranking" element={<RankingView />} />
        <Route path="index-menu" element={<IndexMenuView />} />
        <Route path="profile" element={<ProfileView />} />
        <Route path="games" element={<GamesView />} />
        {/* <Route element={<RequireAuth />}>
            <Route path="upload-user" element={<UploadUser />} />
            <Route path="my-score" element={<MyScore />} /> */}
        {/* ------------------------GAMES BASIC -------------------------------------------- */}
        <Route path="games/basic" element={<BasicView />} />
        <Route path="games/basic/vocabulary" element={<BasicVocabulary />} />
        <Route path="games/basic/grammar" element={<BasicGrammar />} />
        <Route path="games/basic/match" element={<BasicMatch />} />
        <Route path="games/basic/choose" element={<BasicChoose />} />
        {/* ------------------------INTRO BASIC-------------------------------------------- */}
        <Route
          path="games/basic/intro-vocabulary"
          element={<IntroBasicVocabulary />}
        />
        <Route
          path="games/basic/intro-grammar"
          element={<IntroBasicGrammar />}
        />
        <Route path="games/basic/intro-choose" element={<IntroBasicChoose />} />
        <Route path="games/basic/intro-match" element={<IntroBasicMatch />} />

        <Route path="games/next-intermediate" element={<NextIntermediate />} />
        {/* ------------------------GAMES INTERMEDIATE-------------------------------------------- */}
        <Route path="games/intermediate" element={<IntermediateView />} />

        <Route
          path="games/intermediate/vocabulary"
          element={<IntermediateVocabulary />}
        />
        <Route
          path="games/intermediate/grammar"
          element={<IntermediateGrammar />}
        />
        <Route
          path="games/intermediate/verbs"
          element={<IntermediateVerbs />}
        />

        <Route
          path="games/intermediate/match"
          element={<IntermediateMatch />}
        />
        {/* ------------------------INTRO INTERMEDIATE-------------------------------------------- */}
        <Route
          path="games/intermediate/intro-vocabulary"
          element={<IntroIntermediateVocabulary />}
        />

        <Route
          path="games/intermediate/intro-grammar"
          element={<IntroIntermediateGrammar />}
        />
        <Route
          path="games/intermediate/intro-verbs"
          element={<IntroIntermediateVerbs />}
        />
        <Route
          path="games/intermediate/intro-match"
          element={<IntroIntermediateMatch />}
        />

        <Route path="games/next-advanced" element={<NextAdvanced />} />
        {/* ------------------------SCORE INTERMEDIATE-------------------------------------------- */}
        {/* <Route
              path="ranking/intermediate-vocabulary"
              element={<ScoreIntVocabulary />}
            />

            <Route
              path="ranking/intermediate-verbs"
              element={<ScoreIntVerbs />}
            />

            <Route
              path="ranking/intermediate-grammar"
              element={<ScoreIntGrammar />}
            />

            <Route
              path="ranking/intermediate-match"
              element={<ScoreIntMatch />}
            />
            <Route
              path="games/basic/next-advanced"
              element={<NextAdvanced />}
            /> */}
        {/* ------------------------GAMES ADVANCED-------------------------------------------- */}
        <Route path="games/advanced" element={<AdvancedView />} />

        <Route
          path="games/advanced/vocabulary"
          element={<AdvancedVocabulary />}
        />
        <Route path="games/advanced/grammar" element={<AdvancedGrammar />} />
        <Route path="games/advanced/verbs" element={<AdvancedVerbs />} />
        <Route path="games/advanced/match" element={<AdvancedMatch />} />
        {/* ------------------------INTRO ADVANCED-------------------------------------------- */}
        <Route
          path="games/advanced/intro-vocabulary"
          element={<IntroAdvancedVocabulary />}
        />
        <Route
          path="games/advanced/intro-grammar"
          element={<IntroAdvancedGrammar />}
        />
        <Route
          path="games/advanced/intro-verbs"
          element={<IntroAdvancedVerbs />}
        />
        <Route
          path="games/advanced/intro-match"
          element={<IntroAdvancedMatch />}
        />
        <Route path="completed" element={<NextCompleted />} />
        {/* ------------------------SCORE ADVANCED-------------------------------------------- */}
        {/* <Route
              path="ranking/advanced-vocabulary"
              element={<ScoreAdvVocabulary />}
            />

            <Route path="ranking/advanced-verbs" element={<ScoreAdvVerbs />} />

            <Route
              path="ranking/advanced-grammar"
              element={<ScoreAdvGrammar />}
            /> */}
        {/* <Route path="ranking/advanced-match" element={<ScoreAdvMatch />} /> */}
        {/* </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
  // );
}
