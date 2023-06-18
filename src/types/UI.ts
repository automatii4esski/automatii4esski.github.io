import {
  HTMLAttributes,
  LinkHTMLAttributes,
  InputHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';
import { Props } from 'react-input-mask';

export interface ISocialLink extends LinkHTMLAttributes<HTMLElement> {
  href: string;
}

export interface IUserAvatar extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface IMaskedInput
  extends InputHTMLAttributes<HTMLInputElement>,
    Props {}

export interface IInputBlock extends HTMLAttributes<HTMLDivElement> {
  blockTitle: string;
  tip?: string;
  error?: string;
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'hollow';
}

export interface IProgressLine extends HTMLAttributes<HTMLDivElement> {
  width: number;
}

export interface IProgressDot extends HTMLAttributes<HTMLDivElement> {
  variant: 'active' | 'done' | 'disabled';
}
