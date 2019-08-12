import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/



import {cssSpriteGenerator} from "./net.creative-tweet.library.js"



export function getScss( context ) {
    cssSpriteGenerator.init( context, 'scss' );
    cssSpriteGenerator.pasteBoard.setString_forType(
        cssSpriteGenerator.getMixinSet( 'scss' ), 
        NSPasteboardTypeString
    );
}

export function getSass( context ) {
    cssSpriteGenerator.init( context, 'sass' );
    cssSpriteGenerator.pasteBoard.setString_forType(
        cssSpriteGenerator.getMixinSet( 'sass' ), 
        NSPasteboardTypeString
    );
    sketch.UI.message("Copied to your clipboard 🎉");
}

export function getLess( context ) {
    cssSpriteGenerator.init( context, 'less' );
    cssSpriteGenerator.pasteBoard.setString_forType(
        cssSpriteGenerator.getMixinSet( 'less' ), 
        NSPasteboardTypeString
    );
}

export function getStylus( context ) {
    cssSpriteGenerator.init( context, 'stylus' );
    cssSpriteGenerator.pasteBoard.setString_forType(
        cssSpriteGenerator.getMixinSet( 'stylus' ), 
        NSPasteboardTypeString
    );
}
