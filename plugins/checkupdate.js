

const { cmd } = require('../command'),
  axios = require('axios'),
  fs = require('fs'),
  path = require('path'),
  AdmZip = require('adm-zip')
cmd(
  {
    pattern: 'checkupdate',
    alias: ['checkupgrade', 'checksync'],
    react: '🏁',
    desc: 'Check for updates without applying them.',
    category: 'misc',
    filename: __filename,
  },
  async (
    _0x12553d,
    _0x3b0e7f,
    _0x513ca0,
    { from: _0x4f6035, reply: _0x5d90e8, sender: _0x3fc6ce, isOwner: _0x90cd41 }
  ) => {
    if (!_0x90cd41) {
      return _0x5d90e8('This command is only for the bot owner.')
    }
    try {
      const { data: _0x5b6f17 } = await axios.get(
          'https://api.github.com/repos/Crazynotdev/TERRA-XMD/commits/main'
        ),
        _0x2bd28a = _0x5b6f17.sha,
        _0x352f8e = _0x5b6f17.commit.author.name,
        _0x35cca7 = new Date(_0x5b6f17.commit.author.date).toLocaleString(
          'en-US',
          { timeZone: 'UTC' }
        ),
        _0x5bab21 = _0x5b6f17.files
          .map((_0x550ee4) => '\uD83D\uDCC4 ' + _0x550ee4.filename)
          .join('\n')
      let _0x22514c = 'unknown'
      try {
        const _0xf8cf3d = require('../package.json')
        _0x22514c = _0xf8cf3d.commitHash || 'unknown'
      } catch (_0x5a922b) {
        console.error('Error reading package.json:', _0x5a922b)
      }
      if (_0x2bd28a === _0x22514c) {
        return _0x5d90e8(
          '```\u2705 Your TERRA-XMD bot is already up-to-date!```\n'
        )
      } else {
        await _0x5d90e8(
          '\uD83D\uDD04 *🔸Updates are available for TERRA XMD.*\n\uD83D\uDCDD *Last Commit*: `' +
            _0x2bd28a +
            '`\n\uD83D\uDC64 *Author*: ' +
            _0x352f8e +
            '\n\uD83D\uDCC5 *Date*: ' +
            _0x35cca7 +
            '\n\uD83D\uDD04 *Files Modified*:\n' +
            _0x5bab21 +
            '\n\nTo update the bot, please run the command `.update`'
        )
      }
    } catch (_0x301335) {
      console.error('Check update error:', _0x301335)
      _0x5d90e8('\u274C Check update failed. Please try manually.')
    }
  }
)
