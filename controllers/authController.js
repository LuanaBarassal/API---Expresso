const supabase = require('../supabaseClient');

exports.register = async (req, res) => {
  const { email, senha } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ email, senha }]);

  if (error) return res.status(400).json({ msg: error.message });
  return res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .eq('senha', senha)
    .single();

  if (error || !data) return res.status(401).json({ msg: "Login inválido" });
  return res.status(200).json({ msg: "Login bem-sucedido" });
};