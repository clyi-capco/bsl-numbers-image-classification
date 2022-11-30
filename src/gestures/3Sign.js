import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

//3
const SIGN_3 = new  GestureDescription('3');

SIGN_3.addDirection( Finger.Thumb,  FingerDirection.HorizontalLeft, 1.0);
SIGN_3.addDirection( Finger.Thumb,  FingerDirection.HorizontalRight, 1.0);

SIGN_3.addCurl( Finger.Index,  FingerCurl.NoCurl, 1.0);
SIGN_3.addDirection( Finger.Index,  FingerDirection.VerticalUp, 1.0);
SIGN_3.addDirection( Finger.Index,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_3.addDirection( Finger.Index,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_3.addCurl( Finger.Middle,  FingerCurl.NoCurl, 1.0);
SIGN_3.addDirection( Finger.Middle,  FingerDirection.VerticalUp, 1.0);
SIGN_3.addDirection( Finger.Middle,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_3.addDirection( Finger.Middle,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_3.addCurl( Finger.Ring,  FingerCurl.NoCurl, 1.0);
SIGN_3.addDirection( Finger.Ring,  FingerDirection.VerticalUp, 1.0);
SIGN_3.addDirection( Finger.Ring,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_3.addDirection( Finger.Ring,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_3.addCurl( Finger.Pinky,  FingerCurl.FullCurl, 1.0);
SIGN_3.addCurl( Finger.Pinky,  FingerCurl.HalfCurl, 0.9);

export default SIGN_3;