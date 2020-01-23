module Components.Errors where

import React.Basic.Hooks (JSX, ReactComponent)

foreign import catchErrors :: ReactComponent { children :: JSX }
