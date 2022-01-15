import {MessagesPageType, messagesReducer} from "./MessagesReducer";
import {ActionCreatorsType} from "./redax-store";

test('user reducer should change changeTextAreaMessage', () => {
   const startState: MessagesPageType = {
      users: [
         {id: 0, name: "Alex", ava: "dasdas"}
      ],
      changeTextAreaMessage: "",
      usersMessages: [
         {id: 0, message: "Hi"}
      ]
   };

   const startAction: ActionCreatorsType = {
      type: "CHANGE-VALUE-MESSAGE",
      newChangeText: "Hello"
   }

   const endState: MessagesPageType = messagesReducer(startState, startAction)

   expect(endState.changeTextAreaMessage).toBe("Hello");
});

test('user reducer should add user messages', () => {
   const startState: MessagesPageType = {
      users: [
         {id: 0, name: "Alex", ava: "dasdas"}
      ],
      changeTextAreaMessage: "Hello",
      usersMessages: [
         {id: 0, message: "Hi"}
      ]
   };

   const startAction: ActionCreatorsType = {
      type: "ADD-MESSAGE"
   }

   const endState: MessagesPageType = messagesReducer(startState, startAction)

   expect(endState.usersMessages.length).toBe(2)
   expect(endState.usersMessages[0].message).toBe("Hello")

});
