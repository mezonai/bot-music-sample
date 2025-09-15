module.exports = async function handleHelp(client, event) {

  try {
    const channel = await client.channels.fetch(event.channel_id);

    const introText = `
      Xin chào! Tôi là bot hỗ trợ phát media trong voice chanel.
      Các lệnh bạn có thể sử dụng:
      - *playmusic <url>: Bắt đầu phát media trong voice chanel ( hiện tại chỉ hỗ trợ các url dạng mp3, mp4, m3u8).
      Ví dụ: *playmusic https://cdn.mezon.ai/sounds/7346483973050015537.mp3
      Vui lòng đảm bảo ae đã join voice chanel trước khi sử dụng các lệnh phát media.
    `;

    const message = await channel.messages.fetch(event.message_id);
    await message.reply({ t: introText });

  } catch (err) {
    console.error(err);
  }
}
