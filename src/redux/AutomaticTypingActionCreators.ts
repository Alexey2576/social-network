import * as actions from './messages/messagesActions'

type ActionsType = typeof actions //actions
type ActionCreatorsNamesType = keyof ActionsType // Objects.key(actions)
type ActionCreatorType = ActionsType[ActionCreatorsNamesType]
// type MessageReducerActionsType = ReturnType<ActionCreatorType>
