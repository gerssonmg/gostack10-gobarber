import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificaionController {
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async index(req, res) {
    const checkUserProvier = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });

    if (!checkUserProvier) {
      return res.status(401).json({ error: 'User is not a provider' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificaionController();
