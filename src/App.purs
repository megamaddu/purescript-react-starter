module App where

import Prelude
import Effect (Effect)
import React.Basic (ReactComponent)
import React.Basic.DOM as R
import React.Basic.Hooks (component)

mkApp :: Effect (ReactComponent {})
mkApp = do
  component "App" \_ -> React.do
    pure $ R.h1_ [ R.text "hello." ]
