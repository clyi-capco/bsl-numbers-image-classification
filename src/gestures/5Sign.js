import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

//5
const SIGN_5 = new  GestureDescription('5');

SIGN_5.addCurl( Finger.Thumb,  FingerCurl.NoCurl, 1.0);
SIGN_5.addDirection( Finger.Thumb,  FingerDirection.HorizontalLeft, 1.0);
SIGN_5.addDirection( Finger.Thumb,  FingerDirection.HorizontalRight, 1.0);

SIGN_5.addCurl( Finger.Index,  FingerCurl.NoCurl, 1.0);
SIGN_5.addDirection( Finger.Index,  FingerDirection.VerticalUp, 1.0);
SIGN_5.addDirection( Finger.Index,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_5.addDirection( Finger.Index,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_5.addCurl( Finger.Middle,  FingerCurl.NoCurl, 1.0);
SIGN_5.addDirection( Finger.Middle,  FingerDirection.VerticalUp, 1.0);
SIGN_5.addDirection( Finger.Middle,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_5.addDirection( Finger.Middle,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_5.addCurl( Finger.Ring,  FingerCurl.NoCurl, 1.0);
SIGN_5.addDirection( Finger.Ring,  FingerDirection.VerticalUp, 1.0);
SIGN_5.addDirection( Finger.Ring,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_5.addDirection( Finger.Ring,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_5.addCurl( Finger.Pinky,  FingerCurl.NoCurl, 1.0);
SIGN_5.addDirection( Finger.Pinky,  FingerDirection.VerticalUp, 1.0);
SIGN_5.addDirection( Finger.Pinky,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_5.addDirection( Finger.Pinky,  FingerDirection.DiagonalUpRight, 1.0);

export default SIGN_5;