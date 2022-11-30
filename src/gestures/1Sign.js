import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

//1
const SIGN_1 = new  GestureDescription('1');

SIGN_1.addDirection( Finger.Thumb,  FingerDirection.HorizontalLeft, 1.0);
SIGN_1.addDirection( Finger.Thumb,  FingerDirection.HorizontalRight, 1.0);

SIGN_1.addCurl( Finger.Index,  FingerCurl.NoCurl, 1.3);
SIGN_1.addDirection( Finger.Index,  FingerDirection.VerticalUp, 1.0);
SIGN_1.addDirection( Finger.Index,  FingerDirection.DiagonalUpLeft, 1.0);
SIGN_1.addDirection( Finger.Index,  FingerDirection.DiagonalUpRight, 1.0);

SIGN_1.addCurl( Finger.Middle,  FingerCurl.FullCurl, 1.0);
SIGN_1.addCurl( Finger.Middle,  FingerCurl.HalfCurl, 0.9);

SIGN_1.addCurl( Finger.Ring,  FingerCurl.FullCurl, 1.0);
SIGN_1.addCurl( Finger.Ring,  FingerCurl.HalfCurl, 0.9);

SIGN_1.addCurl( Finger.Pinky,  FingerCurl.FullCurl, 1.0);
SIGN_1.addCurl( Finger.Pinky,  FingerCurl.HalfCurl, 0.9);

export default SIGN_1;