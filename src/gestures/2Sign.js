import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

//2
const SIGN_2 = new  GestureDescription('2');

SIGN_2.addDirection( Finger.Thumb,  FingerDirection.HorizontalLeft, 1.0);
SIGN_2.addDirection( Finger.Thumb,  FingerDirection.HorizontalRight, 1.0);

SIGN_2.addCurl( Finger.Index,  FingerCurl.NoCurl, 1.0);
SIGN_2.addDirection( Finger.Index,  FingerDirection.VerticalUp, 1.0);
SIGN_2.addDirection( Finger.Index,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_2.addDirection( Finger.Index,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_2.addCurl( Finger.Middle,  FingerCurl.NoCurl, 1.0);
SIGN_2.addDirection( Finger.Middle,  FingerDirection.VerticalUp, 1.0);
SIGN_2.addDirection( Finger.Middle,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_2.addDirection( Finger.Middle,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_2.addCurl( Finger.Ring,  FingerCurl.FullCurl, 1.0);
SIGN_2.addCurl( Finger.Ring,  FingerCurl.HalfCurl, 0.9);

SIGN_2.addCurl( Finger.Pinky,  FingerCurl.FullCurl, 1.0);
SIGN_2.addCurl( Finger.Pinky,  FingerCurl.HalfCurl, 0.9);

export default SIGN_2;