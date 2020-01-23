module Home where

import Prelude
import Effect (Effect)
import React.Basic (ReactComponent)
import React.Basic.DOM as R
import React.Basic.Ext (fakeSuspend)
import React.Basic.Hooks (component)
import React.Basic.Hooks as React

mkHome :: Effect (ReactComponent {})
mkHome = do
  component "Home" \_ -> React.do
    -- This is just a `delay` at the moment, but it could be an API call.
    -- For most applications, loading data dependencies isn't something which
    -- normally fails. Using a suspend-based API call allows these general,
    -- unexpected errors to be handled at the application level. Loading state
    -- is also handled by the nearest Suspend parent, so only the success path
    -- needs to be handled here.
    s <- fakeSuspend "Maddie"
    pure $ R.p_ [ R.text $ "hello, " <> s ]
