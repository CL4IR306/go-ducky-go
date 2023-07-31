namespace SpriteKind {
    export const final = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    assets.animation`pato arriba`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b 7 7 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 7 7 7 7 7 b b . . . . . 
        . . b 7 7 7 7 7 7 7 b b b b b . 
        . . b 7 7 7 7 7 7 7 7 b e d b . 
        . . f 4 d 7 f 1 d 7 b e e b . . 
        . . c 4 4 7 f f 1 b e e d b . . 
        . b 4 4 4 4 b f d e e e b d b b 
        b 4 4 4 4 4 4 7 b e e d c d d b 
        . b 1 1 1 1 1 e e b c c d d d c 
        . b e e e e e e e d d d d d b c 
        . b d e e e e e d d d d d d c . 
        . . b b e e e d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . b 7 b . . . . . . . . . . 
        . . . . b 7 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 7 7 7 7 7 b b . . . . . 
        . . b 7 7 7 7 7 7 7 b b b b b . 
        . . b 7 7 7 7 7 7 7 7 b e d b . 
        . . f 4 d 7 f 1 d 7 b e e b . . 
        . . c 4 4 7 f f 1 b e e d b . . 
        b 4 4 4 4 4 b f d e e e b d b b 
        . b 4 4 4 4 4 1 b e e d c d d b 
        . b 1 1 1 1 1 e e b c c d d d c 
        . b e e e e e e e d d d d d b c 
        . b d e e e e e d d d d d d c . 
        . . b b e e e d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 7 b . . . . . . . . . . 
        . . . . b 7 b . . . . . . . . . 
        . . . . . c b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 7 7 7 7 7 b b . . . . . 
        . . f d 7 7 f 1 d 7 b b . . . . 
        . . c 4 d 7 f f 1 7 7 b . . . . 
        . . 4 4 d d b f d 7 7 b . . . . 
        b 4 4 4 4 4 7 7 7 d b b d d d b 
        . b 4 4 4 4 4 7 7 b e e e d b b 
        . . b 1 1 1 1 1 d e e e e c d b 
        . b e e e e e e b e e d c d d c 
        . b e e e e e e e b c c d d b c 
        . b d e e e e e d d d d d d c . 
        . . b b e e e d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 7 b . . . . . . . . . . 
        . . . . b 7 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 7 7 7 7 7 b b . . . . . 
        . . c 4 d 7 f 1 d 7 b b . . . . 
        b 4 4 4 d d f f 1 7 7 b . . . . 
        . b 4 4 4 4 b f d 7 7 b . . . . 
        . . b 4 4 4 4 7 7 7 7 d b . . . 
        . . b 1 1 1 1 1 1 1 1 d d b . . 
        . b e e e e e e e e d d d d b . 
        . b e e e e e e e b b b d d d b 
        . b e e e e e e c d e e b d d c 
        . b e e e e e e d c d e d b b c 
        . b d e e e e e d d c b e e b . 
        . . b b e e e d d d d c c c b b 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 7 b . . . . . . . . . . 
        . . . . b 7 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 7 7 7 7 7 b b . . . . . 
        . . c 4 d 7 f 1 d 7 b b . . . . 
        b 4 4 4 d d f f 1 7 7 b . . . . 
        . b 4 4 4 4 b f d 7 7 b . . . . 
        . . b 4 4 4 4 7 7 7 7 d b . . . 
        . . b 1 1 1 1 1 1 1 d d d b b . 
        . b e e e e e e e b b b d d d b 
        . b e e e e e e c d e e b d d c 
        . b e e e e e e d c d e d b b c 
        . b e e e e e e d d c b e e b c 
        . b d e e e e e d d d c c c b b 
        . . b b e e e d d d c c . . . . 
        . . . b b c c c c c . . . . . . 
        `,img`
        . . . b 7 b . . . . . . . . . . 
        . . . . b 7 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 7 7 7 7 7 b b . . . . . 
        . . f d 7 7 f 1 d 7 b b . . . . 
        . . c 4 d 7 f f 1 7 7 b . . . . 
        . . 4 4 d d b f d 7 7 b . . . . 
        b 4 4 4 4 4 7 7 7 7 7 d b b b . 
        . b 4 4 4 4 4 7 7 d b b d d d b 
        . . b 1 1 1 1 1 1 b e e e d b b 
        . b e e e e e e d e e e e c d c 
        . b e e e e e e b e e d c d b c 
        . b d e e e e e d b c c d d c . 
        . . b b e e e d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 7 7 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 7 7 7 7 7 b . . . 
        . b b b b b 7 7 7 7 7 7 7 b . . 
        . b d e b 7 7 7 7 7 7 7 7 b . . 
        . . b e e b 7 d 1 f 7 d 4 f . . 
        . . b d e e b 1 f f 7 4 4 c . . 
        b b d b e e e d f b 4 4 4 4 b . 
        b d d c d e e b 7 4 4 4 4 4 4 b 
        c d d d c c b 1 1 1 1 1 1 1 b . 
        c b d d d d d e e e e e e e b . 
        . c d d d d d d e e e e e d b . 
        . . c b d d d d d e e e b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 7 b . . . 
        . . . . . . . . . b 7 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 7 7 7 7 7 b . . . 
        . b b b b b 7 7 7 7 7 7 7 b . . 
        . b d e b 7 7 7 7 7 7 7 7 b . . 
        . . b e e b 7 d 1 f 7 d 4 f . . 
        . . b d e e b 1 f f 7 4 4 c . . 
        b b d b e e e d f b 4 4 4 4 4 b 
        b d d c d e e b 7 4 4 4 4 4 b . 
        c d d d c c b 1 1 1 1 1 1 1 b . 
        c b d d d d d e e e e e e e b . 
        . c d d d d d d e e e e e d b . 
        . . c b d d d d d e e e b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 7 b . . . 
        . . . . . . . . . b 7 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 7 7 7 7 7 b . . . 
        . . . . b b 7 d 1 f 7 7 d f . . 
        . . . . b 7 7 1 f f 7 d 4 c . . 
        . . . . b 7 7 d f b d d 4 4 . . 
        b d d d b b d 7 7 7 4 4 4 4 4 b 
        b b d e e e b 7 7 4 4 4 4 4 b . 
        b d c e e e e d 1 1 1 1 1 b . . 
        c d d c d e e b e e e e e e b . 
        c b d d c c b e e e e e e e b . 
        . c d d d d d d e e e e e d b . 
        . . c b d d d d d e e e b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 7 b . . . 
        . . . . . . . . . b 7 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 7 7 7 7 7 b . . . 
        . . . . b b 7 d 1 f 7 d 4 c . . 
        . . . . b 7 7 1 f f d d 4 4 4 b 
        . . . . b 7 7 d f b 4 4 4 4 b . 
        . . . b d 7 7 7 7 4 4 4 4 b . . 
        . . b d d 7 7 7 7 7 7 7 7 b . . 
        . b d d d d 1 1 1 1 1 1 1 e b . 
        b d d d b b b e e e e e e e b . 
        c d d b e e d c e e e e e e b . 
        c b b d e d c d e e e e e e b . 
        . b e e b c d d e e e e e d b . 
        b b c c c d d d d e e e b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 7 b . . . 
        . . . . . . . . . b 7 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 7 7 7 7 7 b . . . 
        . . . . b b 7 d 1 f 7 d 4 c . . 
        . . . . b 7 7 1 f f d d 4 4 4 b 
        . . . . b 7 7 d f b 4 4 4 4 b . 
        . . . b d 7 7 7 7 4 4 4 4 b . . 
        . b b d d d 7 7 7 7 7 7 7 b . . 
        b d d d b b b 1 1 1 1 1 1 e b . 
        c d d b e e d c e e e e e e b . 
        c b b d e d c d e e e e e e b . 
        c b e e b c d d e e e e e e b . 
        b b c c c d d d e e e e e d b . 
        . . . . c c d d d e e e b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 7 b . . . 
        . . . . . . . . . b 7 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 7 7 7 7 7 b . . . 
        . . . . b b 7 d 1 f 7 7 d f . . 
        . . . . b 7 7 1 f f 7 d 4 c . . 
        . . . . b 7 7 d f b d d 4 4 . . 
        . b b b d 7 7 7 7 7 4 4 4 4 4 b 
        b d d d b b d 7 7 4 4 4 4 4 b . 
        b b d e e e b 1 1 1 1 1 1 b . . 
        c d c e e e e d e e e e e e b . 
        c b d c d e e b e e e e e e b . 
        . c d d c c b d e e e e e d b . 
        . . c b d d d d d e e e b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
    game.gameOver(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . f f f f f f f . . . . 
        . . . . f 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 1 b 7 b 1 7 7 f . . 
        . . . f 7 1 b f 7 f b 1 7 f . . 
        . . . f 7 1 f f 7 f f 1 7 f . . 
        . . . f 7 1 f 1 7 1 f 1 7 f . . 
        . . . f 7 b 1 7 4 7 1 b 7 f . . 
        . . . e f 7 7 4 4 4 7 7 f e . . 
        . . e e d f 4 4 4 4 4 f d e e . 
        . e d d e 1 1 1 1 1 1 1 e d d e 
        e d d e e e e e e e e e e e d d 
        e d e e e e e e e e e e e e d e 
        d d e e e e e e e e e e e d d e 
        e d e e e e e e e e e e e e d e 
        e e d e e e e e e e e e e d e e 
        . e e d e e e e e e e e d e e . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 1 b 7 b 1 7 7 f . . 
        . . . f 7 1 b f 7 f b 1 7 f . . 
        . . . f 7 1 f f 7 f f 1 7 f . . 
        . . . f 7 1 f 1 7 1 f 1 7 f . . 
        . . . f 7 b 1 7 4 7 1 b 7 f . . 
        . . . e f 7 7 4 4 4 7 7 f e . . 
        . e e e d f 4 4 4 4 4 f d e e e 
        e d d d e 1 1 1 1 1 1 1 e d d d 
        e d e e e e e e e e e e e e d e 
        d d e e e e e e e e e e e d d e 
        e d e e e e e e e e e e e e d e 
        e e d e e e e e e e e e e d e . 
        . . . d e e e e e e e e d . . . 
        `],
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.final, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let moving = false
let hero: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel0`)
info.setLife(3)
hero = sprites.create(img`
    . . . . . . . . . . b 7 b . . . 
    . . . . . . . . . b 7 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 7 7 7 7 7 b . . . 
    . . . . b b 7 d 1 f 7 7 d f . . 
    . . . . b 7 7 1 f f 7 d 4 c . . 
    . . . . b 7 7 d f b d d 4 4 . . 
    b d d d b b d 7 7 7 4 4 4 4 4 b 
    b b d e e e b 7 7 4 4 4 4 4 b . 
    b d c e e e e d 1 1 1 1 1 b . . 
    c d d c d e e b e e e e e e b . 
    c b d d c c b e e e e e e e b . 
    . c d d d d d d e e e e e d b . 
    . . c b d d d d d e e e b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(hero, sprites.castle.tileGrass2)
let enemigo = sprites.create(assets.image`policia`, SpriteKind.Enemy)
tiles.placeOnRandomTile(enemigo, sprites.dungeon.hazardSpike)
enemigo.follow(hero)
controller.moveSprite(hero, 200, 200)
scene.cameraFollowSprite(hero)
info.startCountdown(1000)
game.onUpdate(function () {
    moving = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, hero)
    }
})
