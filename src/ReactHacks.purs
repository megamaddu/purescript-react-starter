-- Experimental React features: these will eventually be moved to react-basic[-hooks] or other supporting libraries
module React.Basic.Ext where

import Prelude
import Effect (Effect)
import React.Basic.Hooks (JSX, ReactComponent, Hook)
import Web.DOM (Element)

foreign import suspense :: ReactComponent { children :: Array JSX, fallback :: JSX }

foreign import strictMode :: ReactComponent { children :: JSX }

foreign import renderConcurrentMode :: JSX -> Element -> Effect Unit

foreign import data UseSuspend :: Type -> Type -> Type

foreign import fakeSuspend :: forall a. a -> Hook (UseSuspend a) a
