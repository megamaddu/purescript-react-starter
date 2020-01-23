module App where

import Prelude
import Components.Errors (catchErrors)
import Effect (Effect)
import Home (mkHome)
import React.Basic.DOM as R
import React.Basic.Ext (strictMode, suspense)
import React.Basic.Hooks (ReactComponent, component, element)

mkApp :: Effect (ReactComponent {})
mkApp = do
  home <- mkHome
  component "App" \_ ->
    pure
      $ element strictMode
          { children:
            element catchErrors
              { children:
                element suspense
                  { fallback: R.h4_ [ R.text "Loading..." ]
                  , children:
                    [ element home {}
                    ]
                  }
              }
          }
