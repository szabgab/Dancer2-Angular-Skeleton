package [% appname %];
use Dancer2;

our $VERSION = '0.1';

get '/' => sub {
    template 'index';
};

get '/api/0/info' => sub {
    to_json {
        config   => scalar(config), 
        date     => scalar localtime,
        perl     => $],
        dancer   => $Dancer2::VERSION,
        app      => __PACKAGE__,
        version  => $VERSION,
    };
};


true;
