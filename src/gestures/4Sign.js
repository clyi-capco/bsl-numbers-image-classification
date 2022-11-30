import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

//4
const SIGN_4 = new  GestureDescription('4');

SIGN_4.addCurl( Finger.Thumb,  FingerCurl.HalfCurl, 0.9)
SIGN_4.addCurl( Finger.Thumb,  FingerCurl.FullCurl, 0.9)
SIGN_4.addDirection( Finger.Thumb,  FingerDirection.HorizontalLeft, 1.0);
SIGN_4.addDirection( Finger.Thumb,  FingerDirection.HorizontalRight, 1.0);

SIGN_4.addCurl( Finger.Index,  FingerCurl.NoCurl, 1.0);
SIGN_4.addDirection( Finger.Index,  FingerDirection.VerticalUp, 1.0);
SIGN_4.addDirection( Finger.Index,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_4.addDirection( Finger.Index,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_4.addCurl( Finger.Middle,  FingerCurl.NoCurl, 1.0);
SIGN_4.addDirection( Finger.Middle,  FingerDirection.VerticalUp, 1.0);
SIGN_4.addDirection( Finger.Middle,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_4.addDirection( Finger.Middle,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_4.addCurl( Finger.Ring,  FingerCurl.NoCurl, 1.0);
SIGN_4.addDirection( Finger.Ring,  FingerDirection.VerticalUp, 1.0);
SIGN_4.addDirection( Finger.Ring,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_4.addDirection( Finger.Ring,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_4.addCurl( Finger.Pinky,  FingerCurl.NoCurl, 1.0);
SIGN_4.addDirection( Finger.Pinky,  FingerDirection.VerticalUp, 1.0);
SIGN_4.addDirection( Finger.Pinky,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_4.addDirection( Finger.Pinky,  FingerDirection.DiagonalUpRight, 1.0);

export default SIGN_4;