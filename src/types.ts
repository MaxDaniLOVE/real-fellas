import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { AppStateType } from './store/reducers';

export interface AuthState {
  isRegisterMode: boolean;
  email: string;
  password: string;
  userName: string;
}

export interface DataState {
  messages: Message[];
  message: string;
  isOpenedConnection: boolean;
  lastMessage: string;
  showSpinner: boolean;
}

export interface SessionState {
  isLoggedIn: boolean;
  email: string;
  userName: string;
  id: string;
  avatar: string | null;
}

export interface AppStateProps {
  isLoggedIn: boolean;
}

export interface ContainerStateProps {
  children: React.ReactNode;
}

export interface HeaderStateProps {
  userName: string;
  avatar: string | null;
}

export interface HeaderDispatchProps {
  signOut(): void;
  onPostNewAvatar(formData: FormData): void;
  onDeleteAvatar(): void;
}

export type HeaderTypes = HeaderStateProps & HeaderDispatchProps;

type Sender = {
  id: string;
  userName: string;
  email: string;
}

type Message = {
  id: string;
  message: string;
  timestamp: string;
  sendBy: Sender | null;
}

export interface MessageStateProps {
  id: string;
}

export interface MessagesProps {
  messages: Array<Message>;
}

export type MessageProps = MessageStateProps & {
  message: Message;
}

export interface MessageInputStateProps {
  message: string;
}
export interface MessageInputDispatchProps {
  onChangeMessageInput(e: any): void;
}

export type MessageInputProps = MessageInputStateProps & MessageInputDispatchProps & {
  sendMessage(e: string): void;
};

export interface SpinnerStateProps {
  showSpinner: boolean;
}

export interface ChatPageStateProps {
  isOpenedConnection: boolean;
  message: string;
  senderId: string;
}
export interface ChatPageDispatchProps {
  initSocket(ws): void;
}

export type ChatPageProps = ChatPageStateProps & ChatPageDispatchProps;

export interface LoginPageStateProps {
  isRegisterMode: boolean;
  isLoggedIn: boolean;
}

export interface LoginPageDispatchProps {
  authFormChange(event: any): void;
  registerUser(): void;
  signIn(): void;
  switchRegisterMode(event: any): void;
}

export type LoginPageProps = LoginPageStateProps & LoginPageDispatchProps;

export type ThunkActionCreator<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, Action<string>>;

export type DefaultActionCreator = ActionCreator<Action>;

export interface ErrorState {
  status: number;
  message: string;
}
export interface AlertsContainerStateProps {
  error: ErrorState;
}
export interface AlertsContainerDispatchProps {
  closeError(): void;
}

export interface UpdateAvatarFormProps {
  onPostNewAvatar(formData: FormData): void;
  onDeleteAvatar(): void;
  hasAvatar: boolean;
}

