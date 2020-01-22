module Main where

import Prelude
import App (mkApp)
import Control.Monad.Error.Class (throwError)
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Exception (error)
import React.Basic (element)
import React.Basic.DOM (render)
import Web.DOM.Document (createElement)
import Web.DOM.Element as Element
import Web.DOM.Node (appendChild)
import Web.HTML (window)
import Web.HTML.HTMLDocument (body, toDocument)
import Web.HTML.HTMLElement as HTMLElement
import Web.HTML.Window (document)

main :: Effect Unit
main = do
  doc_ <- document =<< window
  bodyM_ <- body doc_
  case bodyM_ of
    Nothing -> do
      throwError $ error "Unable to find document body."
    Just body_ -> do
      root <- createElement "div" $ toDocument doc_
      void $ appendChild (Element.toNode root) (HTMLElement.toNode body_)
      app <- mkApp
      render (element app {}) root
